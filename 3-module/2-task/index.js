/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let newMassive = [];
  for (let filtered1 of arr) {
    if (filtered1 >=a && filtered1 <=b) {
      newMassive.push(filtered1)
    }
  } 
  return newMassive;
}
