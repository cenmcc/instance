/**
 * 存储localStorage
 */
function setStore(key, value) {
  if(typeof value !== 'string'){
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value);
}

/**
 * 获取localStorage
 */
function getStore(key) {
  if(!key) return
  const value = window.localStorage.getItem(key)
  try {
    return JSON.parse(value)
  } catch(e) {
    return value
  }
}

/**
 * 设置cookie
 */
function setCookie(name, value, time = 10080, path = '/', domain, secure) {

  let date = new Date();
  date.setTime(date.getTime() + (time * 1000));

  document.cookie = name + '=' + value +
      '; path=' + path +
      '; expires=' + date.toUTCString() +
      '; domain=' + ((domain) ? domain : '') +
      '; secure=' + ((secure) ? secure : '');
}

/**
 * 获取cookie
 */
function getCookie(name) {
  const cookie = " " + document.cookie;
  var search = " " + name + "=";
  var setStr = null;
  var offset = 0;
  var end = 0;
  if (cookie.length > 0) {
      offset = cookie.indexOf(search);
      if (offset != -1) {
          offset += search.length;
          end = cookie.indexOf(";", offset)
          if (end == -1) {
              end = cookie.length;
          }
          setStr = unescape(cookie.substring(offset, end));
      }
  }
  return (setStr);
}

export {
  setStore,
  getStore,
  setCookie,
  getCookie
}