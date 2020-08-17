/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
    let targetTD = table.querySelectorAll('td');
    for (let i = 0; i < targetTD.length; i++) {
        if ( i === 0 || i % 6 === 0 ) {
          targetTD[i].style.background = "red";
        } 
        
    }
}
