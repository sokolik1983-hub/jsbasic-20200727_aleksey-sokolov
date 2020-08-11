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
    let result = (keys.name + ", " + keys.balance + '\n');
    newMassive.push(result);
  }
  
}
return ((newMassive.join('')).substring(0, (newMassive.join('')).length - 1));
}
