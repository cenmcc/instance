/**
 * 数组，对象深克隆
 */
function deepClone(param) {
  if (typeof param !== 'object') return param
  const data = JSON.stringify(param)
  return JSON.parse(data)
}
