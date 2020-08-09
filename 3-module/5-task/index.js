/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let result = {};
  let newMassive = [];
  let abc = (str).split(/[\s,]+/);
  for (keys of abc) {
    newMassive.push(+keys);
  }

  result.min = Math.min.apply(null, newMassive.filter(Boolean));
  result.max = Math.max.apply(null, newMassive.filter(Boolean));
  return result;
}
