/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let mainUl = document.createElement('ul');
  for (keys of friends) {
      let creatLi = document.createElement('li');
      mainUl.appendChild(creatLi);
      let userData = (keys.firstName + " " + keys.lastName);
      creatLi.innerHTML = userData;
  }
  return mainUl;
}
