const mapCenter = [36.204824, 138.252924];
const defaultZoom = 5;

const stationNameEl = document.getElementById('stationName');
const stationLinesIntroEl = document.getElementById('stationLines');
const stationPlatformsEl = document.getElementById('stationPlatforms');
const stationLinesListEl = document.getElementById('stationLinesList');
const audioStatusEl = document.getElementById('audioStatus');
const playPauseBtn = document.getElementById('playPause');
const stopBtn = document.getElementById('stop');
const audioEl = document.getElementById('melodyPlayer');
const sidebar = document.getElementById('stationSidebar');
const sidebarToggleBtn = document.querySelector('.sidebar-toggle');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const mobileBreakpoint = window.matchMedia('(max-width: 960px)');

const audioCache = new Map();
let activeStation = null;
let suppressPauseMessage = false;

function initMap() {
  const map = L.map('map', {
    center: mapCenter,
    zoom: defaultZoom,
    zoomControl: true,
    scrollWheelZoom: true,
    keyboard: true,
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  return map;
}

function preloadAudio(station) {
  if (audioCache.has(station.id)) {
    return;
  }

  const audio = new Audio(station.melody);
  audio.preload = 'auto';
  audio.load();
  audioCache.set(station.id, audio);
}

function resetAudioState(message) {
  suppressPauseMessage = true;
  if (!audioEl.paused || audioEl.currentTime > 0) {
    audioEl.pause();
  }
  audioEl.currentTime = 0;
  playPauseBtn.classList.remove('is-playing');
  playPauseBtn.setAttribute('aria-pressed', 'false');
  audioStatusEl.textContent = message;
  queueMicrotask(() => {
    suppressPauseMessage = false;
  });
}

function enableAudioControls(enabled) {
  playPauseBtn.disabled = !enabled;
  stopBtn.disabled = !enabled;
}

function updateStationDetails(station) {
  stationNameEl.textContent = station.name;
  stationLinesIntroEl.textContent = `Serving ${station.lines.length} line${
    station.lines.length === 1 ? '' : 's'
  } across Tokyo.`;
  stationPlatformsEl.textContent = station.platforms ?? '—';
  stationLinesListEl.textContent = station.lines.join(', ');
}

function setActiveStation(station) {
  activeStation = station;
  enableAudioControls(true);
  preloadAudio(station);
  audioEl.src = station.melody;
  audioEl.load();
  resetAudioState(`Ready to play ${station.name}'s melody.`);
  updateStationDetails(station);
  if (mobileBreakpoint.matches) {
    setSidebarVisibility(true);
  }
}

function setSidebarVisibility(shouldShow) {
  if (shouldShow) {
    delete sidebar.dataset.hidden;
    sidebarToggleBtn.setAttribute('aria-expanded', 'true');
  } else {
    sidebar.dataset.hidden = 'true';
    sidebarToggleBtn.setAttribute('aria-expanded', 'false');
  }
}

function toggleSidebar() {
  const isHidden = sidebar.dataset.hidden === 'true';
  setSidebarVisibility(isHidden);
}

sidebarToggleBtn?.addEventListener('click', () => {
  toggleSidebar();
});

mobileBreakpoint.addEventListener('change', (event) => {
  if (!event.matches) {
    setSidebarVisibility(true);
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileBreakpoint.matches && sidebar.dataset.hidden !== 'true') {
    setSidebarVisibility(false);
  }
});

playPauseBtn.addEventListener('click', async () => {
  if (!activeStation) return;

  if (audioEl.paused) {
    try {
      await audioEl.play();
    } catch (error) {
      console.error('Unable to play audio', error);
      audioStatusEl.textContent = 'Playback failed. Check your browser settings.';
      return;
    }
  } else {
    audioEl.pause();
  }
});

stopBtn.addEventListener('click', () => {
  if (!activeStation) return;
  resetAudioState(`Stopped ${activeStation.name}'s melody.`);
});

audioEl.addEventListener('play', () => {
  playPauseBtn.classList.add('is-playing');
  playPauseBtn.setAttribute('aria-pressed', 'true');
  audioStatusEl.textContent = `Playing ${activeStation?.name ?? 'station'} melody.`;
});

audioEl.addEventListener('pause', () => {
  if (audioEl.currentTime === 0 || audioEl.ended) {
    playPauseBtn.classList.remove('is-playing');
    playPauseBtn.setAttribute('aria-pressed', 'false');
  }
  if (!audioEl.ended && !suppressPauseMessage) {
    audioStatusEl.textContent = `Paused ${activeStation?.name ?? 'station'} melody.`;
  }
});

audioEl.addEventListener('ended', () => {
  resetAudioState(`${activeStation?.name ?? 'Station'} melody finished.`);
});

// Station dataset is generated in the data prep task and stored as stations.json alongside this script.
async function loadStations(map) {
  try {
    const response = await fetch('stations.json');
    if (!response.ok) {
      throw new Error(`Failed to fetch station dataset: ${response.status}`);
    }
    const stations = await response.json();
    if (!Array.isArray(stations)) {
      throw new Error('Station dataset is not an array.');
    }

    const clusterGroup = L.markerClusterGroup({
      showCoverageOnHover: false,
      maxClusterRadius: 60,
      spiderfyOnMaxZoom: !prefersReducedMotion,
    });

    stations.forEach((station) => {
      const marker = L.marker([station.latitude, station.longitude], {
        title: station.name,
        keyboard: true,
      });

      marker.bindTooltip(station.name, { direction: 'top', offset: [0, -8] });

      const onSelect = () => {
        setActiveStation(station);
      };

      marker.on('click', onSelect);
      marker.on('keypress', (event) => {
        const key = event.originalEvent?.key;
        if (key === 'Enter' || key === ' ') {
          onSelect();
        }
      });

      clusterGroup.addLayer(marker);
      preloadAudio(station);
    });

    map.addLayer(clusterGroup);

    const bounds = clusterGroup.getBounds();
    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [32, 32] });
    }

    enableAudioControls(false);
    audioStatusEl.textContent = 'Select a station marker to explore its melody.';
  } catch (error) {
    console.error(error);
    stationLinesIntroEl.textContent = 'Unable to load station data. Please try again later.';
    enableAudioControls(false);
  }
}

const map = initMap();
loadStations(map);
