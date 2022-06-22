const StorageService = {
  create(key, value) {
    localStorage.setItem(key, value);
  },
  read(key) {
    return localStorage.getItem(key);
  },
  update(key, value) {
    return localStorage.setItem(key, value);
  },
  delete(key) {
    localStorage.removeItem(key);
  },
};

globalThis.videos.StorageService = StorageService;
