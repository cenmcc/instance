/**
 * 存储localStorage
 */
function setStorage(key, value) {
  if (value === "" || value === undefined || value === null) {
    value = null;
  } else if (typeof value !== "string") {
    value = JSON.stringify(value);
  }
  window.localStorage.setItem(key, value);
}

/**
 * 获取localStorage
 */
function getStorage(key) {
  if (!key) return;
  const value = window.localStorage.getItem(key);
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
}
// 获取localStorage所有key
function getStorageKey() {
  const keys = Object.keys(window.localStorage)
  return keys
}
/**
 * 删除localStorage
 */
function removeStorage(name) {
  if (!name) return;
  window.localStorage.removeItem(name);
}

/**
 * 清空localStorage
 */
function clearStorage() {
  window.localStorage.clear();
}


export { setStorage, getStorage, removeStorage, clearStorage, getStorageKey};
