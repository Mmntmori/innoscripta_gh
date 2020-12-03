const LocalStorageService = function () {
  const setItem = function (key, item) {
    localStorage.setItem(
      key,
      JSON.stringify([...item])
    );
  }

  const removeItem = function (key) {
    localStorage.removeItem(key);
  }

  const getItem = function (key) {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item)
      : null;
  }

  return ({
    removeItem,
    getItem,
    setItem
  })
}

export default LocalStorageService;
