/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  let newMassive = [];

  for (keys of users) { 
    if (keys.age <= age) {
  
      let result = (keys.name + ", " + keys.balance);
      newMassive.push(result);
    }
  
  }
  return (newMassive.join('\n'));
}
