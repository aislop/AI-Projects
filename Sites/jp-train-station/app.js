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
const resetViewBtn = document.getElementById('resetView');
const operatorFilterEl = document.getElementById('operatorFilter');
const operatorSearchEl = document.getElementById('operatorSearch');
const lineFilterEl = document.getElementById('lineFilter');
const lineSearchEl = document.getElementById('lineSearch');
const clearFiltersBtn = document.getElementById('clearFilters');
const filterSummaryEl = document.getElementById('filterSummary');
const searchHintEl = document.getElementById('searchHint');
const stationOperatorsEl = document.getElementById('stationOperators');
const panelHelperEl = document.getElementById('panelHelper');

const defaultStationTitle = stationNameEl?.textContent ?? '';
const defaultStationSummary = stationSummaryEl?.textContent ?? '';
const defaultPanelHelperText = panelHelperEl?.textContent ?? '';

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
const operatorOptions = new Set();
const lineOptions = new Set();

let allStations = [];
let filteredStations = [];
let activeOperatorFilters = new Set();
let activeLineFilters = new Set();
let filteredBounds = null;
let mapInstance = null;

let activeStation = null;
let suppressPauseMessage = false;
let currentTrack = null;
let clusterGroup;
let defaultBounds = null;
let totalStations = 0;

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

function renderMetaPills(container, values = [], highlightSet = new Set()) {
  if (!container) return;
  container.innerHTML = '';
  if (!Array.isArray(values) || values.length === 0) {
    return;
  }

  const fragment = document.createDocumentFragment();
  values.forEach((value) => {
    if (!value) return;
    const pill = document.createElement('span');
    pill.className = 'meta-pill';
    pill.textContent = value;
    if (highlightSet.has(value)) {
      pill.classList.add('is-highlighted');
      pill.setAttribute('aria-label', `${value} (filtered)`);
    }
    fragment.append(pill);
  });
  container.append(fragment);
}

function populateSelectOptions(selectEl, values) {
  if (!selectEl) return;
  const fragment = document.createDocumentFragment();
  values
    .slice()
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
    .forEach((value) => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = value;
      option.dataset.searchValue = normalise(value);
      fragment.append(option);
    });
  selectEl.innerHTML = '';
  selectEl.append(fragment);
}

function filterSelectOptions(selectEl, query) {
  if (!selectEl) return;
  const normalized = normalise(query ?? '');
  Array.from(selectEl.options).forEach((option) => {
    const value = option.dataset.searchValue ?? normalise(option.textContent ?? '');
    option.hidden = Boolean(normalized) && !value.includes(normalized);
  });
}

function getSelectedValues(selectEl) {
  if (!selectEl) return [];
  return Array.from(selectEl.selectedOptions ?? []).map((option) => option.value);
}

function refreshVisibleMarkers(stations) {
  if (!clusterGroup) return;
  clusterGroup.clearLayers();
  stations.forEach((station) => {
    const marker = markersById.get(station.id);
    if (marker) {
      clusterGroup.addLayer(marker);
    }
  });
}

function getBoundsForStations(stations) {
  if (!Array.isArray(stations) || stations.length === 0) {
    return null;
  }
  const points = stations
    .map((station) => [Number(station.latitude), Number(station.longitude)])
    .filter(([lat, lng]) => Number.isFinite(lat) && Number.isFinite(lng));
  if (points.length === 0) {
    return null;
  }
  return L.latLngBounds(points);
}

function updatePanelHelperText() {
  if (!panelHelperEl) return;
  if (activeOperatorFilters.size > 0 || activeLineFilters.size > 0) {
    panelHelperEl.textContent = 'Active filters glow below so you can confirm the operators and lines in focus.';
  } else {
    panelHelperEl.textContent = defaultPanelHelperText;
  }
}

function updateFilterSummary(visibleCount, totalCount, { filtersActive } = {}) {
  if (filterSummaryEl) {
    if (!totalCount) {
      filterSummaryEl.textContent = 'Station data unavailable.';
    } else if (!visibleCount) {
      filterSummaryEl.textContent = 'No stations match the current filters.';
    } else if (filtersActive) {
      filterSummaryEl.textContent = `Showing ${visibleCount} of ${totalCount} stations with the current filters.`;
    } else {
      filterSummaryEl.textContent = `Showing all ${totalCount} stations.`;
    }
  }

  if (searchHintEl) {
    if (!totalCount) {
      searchHintEl.textContent = 'Station data unavailable. Try refreshing the page once your connection stabilises.';
    } else if (!visibleCount) {
      searchHintEl.textContent = 'No stations match the current filters. Clear or adjust them to keep exploring.';
    } else if (filtersActive) {
      searchHintEl.textContent = `Filters active: showing ${visibleCount} of ${totalCount} stations. Use the search box to jump directly to a matching stop.`;
    } else {
      searchHintEl.textContent = `Search by station name or combine operator and line filters to explore melodies with precision. ${totalCount} stations available.`;
    }
  }

  if (clearFiltersBtn) {
    clearFiltersBtn.disabled = !filtersActive;
  }
}

function clearStationDetails(message) {
  activeStation = null;
  stationNameEl.textContent = defaultStationTitle;
  stationSummaryEl.textContent = message ?? defaultStationSummary;
  stationPlatformsEl.textContent = '—';
  renderMetaPills(stationLinesEl, []);
  renderMetaPills(stationOperatorsEl, []);
  Object.keys(trackButtons).forEach((track) => {
    setTrackButtonState(track, { disabled: true, active: false });
  });
  stopBtn.disabled = true;
  updatePanelHelperText();
}

function populateFilterControls() {
  populateSelectOptions(operatorFilterEl, Array.from(operatorOptions));
  populateSelectOptions(lineFilterEl, Array.from(lineOptions));
  if (operatorSearchEl) {
    filterSelectOptions(operatorFilterEl, operatorSearchEl.value);
  }
  if (lineSearchEl) {
    filterSelectOptions(lineFilterEl, lineSearchEl.value);
  }
}

function applyFilters({ shouldFitBounds = false } = {}) {
  activeOperatorFilters = new Set(getSelectedValues(operatorFilterEl));
  activeLineFilters = new Set(getSelectedValues(lineFilterEl));

  filteredStations = allStations.filter((station) => {
    const operatorMatch =
      activeOperatorFilters.size === 0 || station.operators.some((operator) => activeOperatorFilters.has(operator));
    const lineMatch =
      activeLineFilters.size === 0 || station.lines.some((line) => activeLineFilters.has(line));
    return operatorMatch && lineMatch;
  });

  stationsIndex.length = 0;
  filteredStations.forEach((station) => {
    stationsIndex.push({ station, normalized: normalise(station.name) });
  });

  populateSearchDatalist(filteredStations);
  refreshVisibleMarkers(filteredStations);

  filteredBounds = getBoundsForStations(filteredStations);
  const filtersActive = activeOperatorFilters.size > 0 || activeLineFilters.size > 0;
  updateFilterSummary(filteredStations.length, totalStations, { filtersActive });
  updatePanelHelperText();

  if (filteredStations.length === 0) {
    const audioMessage = activeStation
      ? `${activeStation.name} is hidden by the current filters. Adjust your selections to keep listening to melodies.`
      : 'No stations match the current filters. Adjust your selections to continue exploring melodies.';
    resetAudioState(audioMessage);
    mapInstance?.closePopup();
    clearStationDetails('No stations match your filters. Clear or adjust them to keep exploring.');
  } else if (activeStation && !filteredStations.some((station) => station.id === activeStation.id)) {
    resetAudioState(
      `${activeStation.name} is not available with the current filters. Choose another station to play its melodies.`,
    );
    mapInstance?.closePopup();
    clearStationDetails('Filters applied. Select another station from the map or search results.');
  }

  if (resetViewBtn) {
    resetViewBtn.disabled = !filteredBounds;
  }

  if (filteredBounds && shouldFitBounds && mapInstance) {
    mapInstance.fitBounds(filteredBounds, {
      padding: [32, 32],
      animate: !prefersReducedMotion,
    });
  } else if (!filteredBounds && shouldFitBounds && defaultBounds && mapInstance) {
    mapInstance.fitBounds(defaultBounds, {
      padding: [32, 32],
      animate: !prefersReducedMotion,
    });
  }
}

function clearAllSelections(selectEl) {
  if (!selectEl) return;
  Array.from(selectEl.options).forEach((option) => {
    option.selected = false;
  });
  selectEl.scrollTop = 0;
}

function clearFilters({ shouldFitBounds = true } = {}) {
  const hadFilters = activeOperatorFilters.size > 0 || activeLineFilters.size > 0;
  clearAllSelections(operatorFilterEl);
  clearAllSelections(lineFilterEl);
  if (operatorSearchEl) {
    operatorSearchEl.value = '';
    filterSelectOptions(operatorFilterEl, '');
  }
  if (lineSearchEl) {
    lineSearchEl.value = '';
    filterSelectOptions(lineFilterEl, '');
  }
  if (hadFilters) {
    applyFilters({ shouldFitBounds });
  }
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
  const lines = Array.isArray(station.lines) ? station.lines : [];
  const operators = Array.isArray(station.operators) ? station.operators : [];
  const lineSummary = lines.length === 1 ? 'line' : 'lines';
  const region = station.region ? ` • ${station.region}` : '';
  stationSummaryEl.textContent = `Serving ${lines.length} ${lineSummary}${region}.`;
  stationPlatformsEl.textContent = station.platforms ?? '—';
  renderMetaPills(stationLinesEl, lines, activeLineFilters);
  renderMetaPills(stationOperatorsEl, operators, activeOperatorFilters);
  updatePanelHelperText();
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
  if (!searchDatalist) return;
  searchDatalist.innerHTML = '';
  if (!Array.isArray(stations) || stations.length === 0) {
    return;
  }
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

async function loadStations() {
  if (resetViewBtn) {
    resetViewBtn.disabled = true;
  }
  stationSummaryEl.textContent = 'Loading station dataset…';
  audioStatusEl.textContent = 'Fetching station melodies and markers…';

  try {
    const response = await fetch('stations.json');
    if (!response.ok) {
      throw new Error(`Failed to fetch station dataset: ${response.status}`);
    }
    const stations = await response.json();
    if (!Array.isArray(stations)) {
      throw new Error('Station dataset is not an array.');
    }

    if (clusterGroup && mapInstance) {
      mapInstance.removeLayer(clusterGroup);
    }

    clusterGroup = L.markerClusterGroup({
      showCoverageOnHover: false,
      maxClusterRadius: 60,
      spiderfyOnMaxZoom: !prefersReducedMotion,
    });

    if (mapInstance) {
      mapInstance.addLayer(clusterGroup);
    }

    markersById.clear();
    stationsIndex.length = 0;
    operatorOptions.clear();
    lineOptions.clear();
    allStations = [];
    filteredStations = [];
    filteredBounds = null;
    activeOperatorFilters = new Set();
    activeLineFilters = new Set();

    if (searchDatalist) {
      searchDatalist.innerHTML = '';
    }
    if (operatorFilterEl) {
      operatorFilterEl.innerHTML = '';
    }
    if (lineFilterEl) {
      lineFilterEl.innerHTML = '';
    }

    stations.forEach((station) => {
      const lines = Array.isArray(station.lines)
        ? station.lines.map((line) => line.trim()).filter(Boolean)
        : [];
      station.lines = lines;

      const operators = Array.isArray(station.operators)
        ? station.operators.map((operator) => operator.trim()).filter(Boolean)
        : [];
      if (!operators.length) {
        operators.push('Independent operator');
      }
      station.operators = Array.from(new Set(operators));

      station.operators.forEach((operator) => operatorOptions.add(operator));
      station.lines.forEach((line) => lineOptions.add(line));

      const marker = L.marker([station.latitude, station.longitude], {
        title: station.name,
        keyboard: true,
      });

      marker.bindTooltip(station.name, { direction: 'top', offset: [0, -8] });
      const popupLines = station.lines.length ? station.lines.join(', ') : 'No lines listed';
      const popupOperators = station.operators.length ? station.operators.join(', ') : 'Various operators';
      marker.bindPopup(
        `<strong>${station.name}</strong><br>${popupLines}<br><small>Operators: ${popupOperators}</small>`,
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
      preloadAudio(station, 'arrival');
      preloadAudio(station, 'departure');
      allStations.push(station);
    });

    populateFilterControls();
    totalStations = allStations.length;
    defaultBounds = getBoundsForStations(allStations);
    applyFilters({ shouldFitBounds: true });

    audioStatusEl.textContent = `Select a station marker to explore its melodies. ${totalStations} stations loaded across Japan. Use the filters above to refine the map.`;
    if (!activeStation) {
      stationSummaryEl.textContent = `Pick a station marker or combine the filters to explore melodies from ${totalStations} stops across Japan.`;
    }
  } catch (error) {
    console.error(error);
    resetAudioState('Station data unavailable. Try refreshing the page once your connection stabilises.');
    clearStationDetails('Station information unavailable until the dataset loads.');
    stationSummaryEl.textContent = 'Unable to load station data. Please try again later.';
    defaultBounds = null;
    totalStations = 0;
    filteredStations = [];
    allStations = [];
    markersById.clear();
    if (clusterGroup) {
      clusterGroup.clearLayers();
    }
    filteredBounds = null;
    activeOperatorFilters = new Set();
    activeLineFilters = new Set();
    updateFilterSummary(0, 0, { filtersActive: false });
    if (operatorFilterEl) {
      operatorFilterEl.innerHTML = '';
    }
    if (lineFilterEl) {
      lineFilterEl.innerHTML = '';
    }
    if (searchDatalist) {
      searchDatalist.innerHTML = '';
    }
    if (resetViewBtn) {
      resetViewBtn.disabled = true;
    }
    updatePanelHelperText();
  }
}

searchForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = searchInput?.value ?? '';
  if (!query) return;

  const station = findStation(query);
  if (!station) {
    const filtersActive = activeOperatorFilters.size > 0 || activeLineFilters.size > 0;
    const message = filtersActive
      ? `No station found for "${query}" within the current filters. Try clearing filters or adjusting your search.`
      : `No station found for "${query}". Try another search or select a marker.`;
    stationSummaryEl.textContent = message;
    return;
  }

  const marker = markersById.get(station.id);
  if (marker && mapInstance) {
    const targetZoom = Math.max(13, mapInstance.getZoom());
    mapInstance.flyTo(marker.getLatLng(), targetZoom, { duration: prefersReducedMotion ? 0 : 1.2 });
  }

  setActiveStation(station, { fromSearch: true });
});

operatorFilterEl?.addEventListener('change', () => applyFilters({ shouldFitBounds: true }));
lineFilterEl?.addEventListener('change', () => applyFilters({ shouldFitBounds: true }));
operatorSearchEl?.addEventListener('input', (event) => {
  filterSelectOptions(operatorFilterEl, event.target.value);
});
lineSearchEl?.addEventListener('input', (event) => {
  filterSelectOptions(lineFilterEl, event.target.value);
});
clearFiltersBtn?.addEventListener('click', () => clearFilters({ shouldFitBounds: true }));

mapInstance = initMap();

resetViewBtn?.addEventListener('click', () => {
  if (!mapInstance) return;
  const bounds = filteredBounds ?? defaultBounds;
  if (bounds?.isValid?.()) {
    mapInstance.fitBounds(bounds, {
      padding: [32, 32],
      animate: !prefersReducedMotion,
    });
  } else {
    mapInstance.setView(mapCenter, defaultZoom, { animate: !prefersReducedMotion });
  }
  mapInstance.closePopup();
  if (!activeStation) {
    if (filteredStations.length === 0) {
      stationSummaryEl.textContent = 'No stations match your filters. Clear or adjust them to keep exploring.';
    } else {
      const visible = filteredStations.length;
      const filtersActive = activeOperatorFilters.size > 0 || activeLineFilters.size > 0;
      stationSummaryEl.textContent = filtersActive
        ? `View reset. Showing ${visible} station${visible === 1 ? '' : 's'} that match your filters.`
        : `Japan overview restored. ${totalStations} stations ready to explore.`;
    }
  }
});

loadStations();
