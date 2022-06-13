/**
 * 设置cookie
 */
export function setCookie(name, value, time = 10080, path = "/", domain, secure) {
  let date = new Date();
  date.setTime(date.getTime() + time * 1000);

  document.cookie =
    name +
    "=" +
    value +
    "; path=" +
    path +
    "; expires=" +
    date.toUTCString() +
    "; domain=" +
    (domain ? domain : "") +
    "; secure=" +
    (secure ? secure : "");
}

/**
 * 获取cookie
 */
export function getCookie(name) {
  const cookie = " " + document.cookie;
  var search = " " + name + "=";
  var setStr = null;
  var offset = 0;
  var end = 0;
  if (cookie.length > 0) {
    offset = cookie.indexOf(search);
    if (offset != -1) {
      offset += search.length;
      end = cookie.indexOf(";", offset);
      if (end == -1) {
        end = cookie.length;
      }
      setStr = unescape(cookie.substring(offset, end));
    }
  }
  return setStr;
}
