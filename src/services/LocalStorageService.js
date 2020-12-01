const LocalStorageService = function() {
  const setItem = function(key, obj) {
    localStorage.setItem(
      key,
      JSON.stringify({obj})
    );
  }

  const removeItem = function(key) {
    localStorage.removeItem(key);
  }

  const getItem = function(key) {
    const item = localStorage.getItem(key);
    return item && this.validate(JSON.parse(item))
      ? JSON.parse(item)
      : null;
  }

  return ({
    removeItem,
    getItem,
    setItem
  })
}

export default LocalStorageService;
