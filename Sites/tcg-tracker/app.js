const DATA_URL = 'https://raw.githubusercontent.com/Somberlord/riftboundfaq/refs/heads/main/app/data/sets/OGN.json';
const STORAGE_KEY = 'riftboundCollection';

async function init() {
  const res = await fetch(DATA_URL);
  const data = await res.json();
  const cards = data.items;
  const container = document.getElementById('cards');
  const statsEl = document.getElementById('stats');
  let owned = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');

  function updateStats() {
    const total = cards.length;
    const collected = Object.values(owned).filter(Boolean).length;
    const percent = ((collected / total) * 100).toFixed(1);
    statsEl.textContent = `Collected ${collected} / ${total} cards (${percent}%)`;
  }

  cards.forEach(card => {
    const div = document.createElement('div');
    div.className = 'card';
    div.textContent = card.title;
    if (owned[card.id]) div.classList.add('collected');
    div.addEventListener('click', () => {
      owned[card.id] = !owned[card.id];
      if (owned[card.id]) div.classList.add('collected');
      else div.classList.remove('collected');
      localStorage.setItem(STORAGE_KEY, JSON.stringify(owned));
      updateStats();
    });
    container.appendChild(div);
  });

  updateStats();
}

window.addEventListener('DOMContentLoaded', init);
