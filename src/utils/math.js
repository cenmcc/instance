/**
* 随机数
*/
function random(min, max) {
  if(max < min || typeof min !== 'number' || typeof max !== 'number') return false

  return Math.floor(Math.random() * (max - min+1)) + min;
}

