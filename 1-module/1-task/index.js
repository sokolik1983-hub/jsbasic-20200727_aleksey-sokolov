/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */


function factorial(n) {
  let number = 1;
    while( n ) {
        number = number * n--;
    }
    return number;  
}






