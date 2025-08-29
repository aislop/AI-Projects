async function searchCard() {
  const query = document.getElementById('search').value.trim();
  if (!query) return;

  try {
    const cardResp = await fetch(`https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(query)}`);
    if (!cardResp.ok) throw new Error('Card not found');
    const card = await cardResp.json();

    let next = card.prints_search_uri;
    let variants = [];
    while (next) {
      const resp = await fetch(next);
      const data = await resp.json();
      variants = variants.concat(data.data);
      next = data.has_more ? data.next_page : null;
    }

    displayVariants(variants);
  } catch (err) {
    alert(err.message);
  }
}

function displayVariants(variants) {
  const container = document.getElementById('variants');
  container.innerHTML = '';

  variants.forEach(v => {
    if (!v.image_uris) return; // skip cards without images
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';

    const img = document.createElement('img');
    img.src = v.image_uris.small;
    img.alt = v.name;

    const title = document.createElement('h3');
    title.textContent = `${v.name} (${v.set.toUpperCase()})`;

    const btn = document.createElement('button');
    btn.textContent = 'Add to Collection';
    btn.addEventListener('click', () => addToCollection(v));

    cardDiv.append(img, title, btn);
    container.appendChild(cardDiv);
  });
}

function addToCollection(card) {
  let collection = JSON.parse(localStorage.getItem('collection') || '[]');
  if (!collection.find(c => c.id === card.id)) {
    collection.push({
      id: card.id,
      name: card.name,
      set: card.set_name,
      image: card.image_uris ? card.image_uris.small : ''
    });
    localStorage.setItem('collection', JSON.stringify(collection));
    renderCollection();
  }
}

function renderCollection() {
  const list = document.getElementById('collectionList');
  list.innerHTML = '';
  const collection = JSON.parse(localStorage.getItem('collection') || '[]');

  collection.forEach(item => {
    const li = document.createElement('li');
    li.className = 'collection-item';

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;

    const span = document.createElement('span');
    span.textContent = `${item.name} (${item.set})`;

    const btn = document.createElement('button');
    btn.textContent = '\u00d7';
    btn.addEventListener('click', () => removeFromCollection(item.id));

    li.append(img, span, btn);
    list.appendChild(li);
  });
}

function removeFromCollection(id) {
  let collection = JSON.parse(localStorage.getItem('collection') || '[]');
  collection = collection.filter(c => c.id !== id);
  localStorage.setItem('collection', JSON.stringify(collection));
  renderCollection();
}

// Event listeners
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('searchBtn').addEventListener('click', searchCard);
  document.getElementById('search').addEventListener('keypress', e => {
    if (e.key === 'Enter') searchCard();
  });
  renderCollection();
});
