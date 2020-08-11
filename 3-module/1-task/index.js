/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let usersName = [];
  for( let user of users) {
    usersName.push(user.name)
  }
return usersName;
}
