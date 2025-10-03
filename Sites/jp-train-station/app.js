const mapCenter = [36.204824, 138.252924];
const defaultZoom = 5;

const stationNameEl = document.getElementById('stationName');
const stationSummaryEl = document.getElementById('stationSummary');
const stationPlatformsEl = document.getElementById('stationPlatforms');
const stationLinesEl = document.getElementById('stationLines');
const audioStatusEl = document.getElementById('audioStatus');
const stopBtn = document.getElementById('stop');
const audioEl = document.getElementById('melodyPlayer');
const searchForm = document.getElementById('stationSearch');
const searchInput = document.getElementById('stationQuery');
const searchDatalist = document.getElementById('stationSuggestions');

const trackButtons = {
  arrival: document.getElementById('playArrival'),
  departure: document.getElementById('playDeparture'),
};

const trackLabels = {
  arrival: 'Arrival',
  departure: 'Departure',
};

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const audioCache = new Map();
const markersById = new Map();
const stationsIndex = [];

let activeStation = null;
let suppressPauseMessage = false;
let currentTrack = null;
let clusterGroup;

function initMap() {
  const map = L.map('map', {
    center: mapCenter,
    zoom: defaultZoom,
    zoomControl: true,
    scrollWheelZoom: true,
    keyboard: true,
    attributionControl: false,
  });

  L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    maxZoom: 19,
  }).addTo(map);

  L.control
    .attribution({ position: 'bottomright' })
    .addAttribution('&copy; OpenStreetMap contributors');

  return map;
}

function normalise(text) {
  return text
    .toLowerCase()
    .replace(/[\u3000\s]+/g, ' ')
    .trim();
}

function preloadAudio(station, track) {
  const source = station.melodies?.[track];
  if (!source) {
    return;
  }

  const cacheKey = `${station.id}:${track}`;
  if (audioCache.has(cacheKey)) {
    return;
  }

  const audio = new Audio(source);
  audio.preload = 'auto';
  audio.load();
  audioCache.set(cacheKey, audio);
}

function resetAudioState(message) {
  suppressPauseMessage = true;
  if (!audioEl.paused || audioEl.currentTime > 0) {
    audioEl.pause();
  }
  audioEl.currentTime = 0;
  if (currentTrack) {
    const button = trackButtons[currentTrack];
    button?.classList.remove('is-playing');
    button?.setAttribute('aria-pressed', 'false');
  }
  currentTrack = null;
  stopBtn.disabled = true;
  audioStatusEl.textContent = message;
  queueMicrotask(() => {
    suppressPauseMessage = false;
  });
}

function setTrackButtonState(track, { disabled, active }) {
  const button = trackButtons[track];
  if (!button) return;

  button.disabled = disabled;
  if (active) {
    button.classList.add('is-playing');
    button.setAttribute('aria-pressed', 'true');
  } else {
    button.classList.remove('is-playing');
    button.setAttribute('aria-pressed', 'false');
  }
}

function updateStationDetails(station) {
  stationNameEl.textContent = station.name;
  const lineSummary = station.lines.length === 1 ? 'line' : 'lines';
  const region = station.region ? ` • ${station.region}` : '';
  stationSummaryEl.textContent = `Serving ${station.lines.length} ${lineSummary}${region}.`;
  stationPlatformsEl.textContent = station.platforms ?? '—';
  stationLinesEl.textContent = station.lines.join(', ');
}

function setActiveStation(station, { fromSearch = false } = {}) {
  activeStation = station;
  Object.keys(trackButtons).forEach((track) => {
    const hasTrack = Boolean(station.melodies?.[track]);
    setTrackButtonState(track, { disabled: !hasTrack, active: false });
    preloadAudio(station, track);
  });
  resetAudioState(`Arrival and departure melodies ready for ${station.name}. Choose a track to play.`);
  updateStationDetails(station);

  const marker = markersById.get(station.id);
  if (marker && fromSearch && clusterGroup) {
    clusterGroup.zoomToShowLayer(marker, () => {
      marker.openPopup();
    });
  }
}

function findStation(query) {
  const normalized = normalise(query);
  if (!normalized) return null;

  let exact = stationsIndex.find((entry) => entry.normalized === normalized);
  if (exact) return exact.station;

  exact = stationsIndex.find((entry) => entry.normalized.includes(normalized));
  return exact ? exact.station : null;
}

function populateSearchDatalist(stations) {
  const fragment = document.createDocumentFragment();
  stations
    .slice()
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((station) => {
      const option = document.createElement('option');
      option.value = station.name;
      fragment.append(option);
    });
  searchDatalist.append(fragment);
}

async function toggleTrack(track) {
  if (!activeStation) return;
  const source = activeStation.melodies?.[track];
  if (!source) return;

  if (currentTrack === track && !audioEl.paused) {
    audioEl.pause();
    return;
  }

  if (currentTrack !== track) {
    if (currentTrack) {
      setTrackButtonState(currentTrack, { disabled: false, active: false });
    }
    audioEl.src = source;
    audioEl.load();
    currentTrack = track;
    audioStatusEl.textContent = `Ready to play the ${trackLabels[track].toLowerCase()} melody for ${activeStation.name}.`;
  }

  try {
    await audioEl.play();
  } catch (error) {
    console.error('Unable to play audio', error);
    audioStatusEl.textContent = 'Playback failed. Check your browser settings.';
  }
}

Object.entries(trackButtons).forEach(([track, button]) => {
  button?.addEventListener('click', () => toggleTrack(track));
});

stopBtn.addEventListener('click', () => {
  if (!activeStation) return;
  const stationName = activeStation.name;
  resetAudioState(`Stopped playback for ${stationName}.`);
});

audioEl.addEventListener('play', () => {
  if (!currentTrack) return;
  setTrackButtonState(currentTrack, { disabled: false, active: true });
  stopBtn.disabled = false;
  const stationName = activeStation?.name ?? 'station';
  audioStatusEl.textContent = `Playing ${trackLabels[currentTrack].toLowerCase()} melody for ${stationName}.`;
});

audioEl.addEventListener('pause', () => {
  if (!currentTrack) return;
  setTrackButtonState(currentTrack, { disabled: false, active: false });
  if (!audioEl.ended && !suppressPauseMessage) {
    const stationName = activeStation?.name ?? 'station';
    audioStatusEl.textContent = `Paused ${trackLabels[currentTrack].toLowerCase()} melody for ${stationName}.`;
  }
});

audioEl.addEventListener('ended', () => {
  const finishedTrack = currentTrack;
  const stationName = activeStation?.name ?? 'Station';
  resetAudioState(`${trackLabels[finishedTrack ?? 'departure'] ?? 'Station'} melody finished for ${stationName}.`);
});

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

    clusterGroup = L.markerClusterGroup({
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
      marker.bindPopup(
        `<strong>${station.name}</strong><br>${station.lines.join(', ')}`,
      );

      const onSelect = (options = {}) => {
        setActiveStation(station, options);
      };

      marker.on('click', () => {
        marker.openPopup();
        onSelect();
      });
      marker.on('keypress', (event) => {
        const key = event.originalEvent?.key;
        if (key === 'Enter' || key === ' ') {
          marker.openPopup();
          onSelect();
        }
      });

      clusterGroup.addLayer(marker);
      markersById.set(station.id, marker);
      stationsIndex.push({ station, normalized: normalise(station.name) });
      preloadAudio(station, 'arrival');
      preloadAudio(station, 'departure');
    });

    populateSearchDatalist(stations);
    map.addLayer(clusterGroup);

    const bounds = clusterGroup.getBounds();
    if (bounds.isValid()) {
      map.fitBounds(bounds, { padding: [32, 32] });
    }

    Object.keys(trackButtons).forEach((track) => {
      setTrackButtonState(track, { disabled: true, active: false });
    });
    stopBtn.disabled = true;
    audioStatusEl.textContent = 'Select a station marker to explore its melodies.';
  } catch (error) {
    console.error(error);
    stationSummaryEl.textContent = 'Unable to load station data. Please try again later.';
    Object.keys(trackButtons).forEach((track) => {
      setTrackButtonState(track, { disabled: true, active: false });
    });
    stopBtn.disabled = true;
  }
}

searchForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = searchInput?.value ?? '';
  if (!query) return;

  const station = findStation(query);
  if (!station) {
    stationSummaryEl.textContent = `No station found for "${query}". Try another search or select a marker.`;
    return;
  }

  const marker = markersById.get(station.id);
  if (marker) {
    const targetZoom = Math.max(13, map.getZoom());
    map.flyTo(marker.getLatLng(), targetZoom, { duration: prefersReducedMotion ? 0 : 1.2 });
  }

  setActiveStation(station, { fromSearch: true });
});

const map = initMap();
loadStations(map);
