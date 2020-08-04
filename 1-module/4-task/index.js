/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {

  let checkXXX = str.toLowerCase().includes("xxx");
  let checkBookies = str.toLowerCase().includes("1xbet");
  
  if (checkXXX === true || checkBookies === true) {
    return true;
  } 
  return false;
}

