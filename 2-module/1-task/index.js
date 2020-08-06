/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  delete salaries["isPayed"];
  let result = 0;
  for(key in salaries) {
  result += (~~(+salaries[key]));
 };

  return result;
}
