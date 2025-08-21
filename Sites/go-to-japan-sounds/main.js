document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    document.querySelectorAll('.category').forEach(category => {
      let matches = 0;
      category.querySelectorAll('.sound-card').forEach(card => {
        const name = card.dataset.name.toLowerCase();
        if (name.includes(query)) {
          card.style.display = '';
          matches++;
        } else {
          card.style.display = 'none';
        }
      });
      category.style.display = matches > 0 ? '' : 'none';
    });
  });
});
