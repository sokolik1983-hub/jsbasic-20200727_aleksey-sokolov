/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {

  let c = str.toLowerCase().includes("xxx");
  let d = str.toLowerCase().includes("1xbet");
  
  if (c === true || d === true) {
    return true;
  } else {
    return false;
  }
}

