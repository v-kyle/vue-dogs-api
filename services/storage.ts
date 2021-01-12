const key = 'favorites';

function saveFavorites(favorites: Array<string>) {
  localStorage.setItem(key, JSON.stringify(favorites));
}

function getFavorites() {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

export { saveFavorites, getFavorites };
