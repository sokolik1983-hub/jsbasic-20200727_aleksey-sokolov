/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {

    return str.replace(/(-)[а-яёa-z]/g, function(x){ return x.toUpperCase(); }  ).replace(/-/g, "");
//   let newMassive = [];

//   for(let keys of str.split(/-/)) {
//     newMassive.push(keys.charAt(0).toUpperCase() + keys.substr(1));
//   }

//   return newMassive.join('');

}
