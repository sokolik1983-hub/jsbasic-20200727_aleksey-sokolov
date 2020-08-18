/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let rows = table.querySelectorAll('tr');

    for (i = 0; i < rows.length; i++) {
        let abcd = rows[i].getElementsByTagName('td');
        for( keys of abcd) {
            let dataset = keys.dataset;
            if (keys.dataset.available === "true") {
                keys.closest('tr').classList.add('available');
                keys.closest('tr').removeAttribute('hidden')
            } else if (keys.dataset.available === "false") {
                keys.closest('tr').classList.add('unavailable');
                keys.closest('tr').removeAttribute('hidden')
            } else {
                keys.closest('tr').setAttribute('hidden','');
            }
            let str = keys.textContent;
            let num = Number(str);
            if (num < 18) {
                keys.closest('tr').style.textDecoration = "line-through";
            }
            if (keys.textContent === "m") {
                keys.closest('tr').classList.add('male');
              } else if (keys.textContent === "f") {
                keys.closest('tr').classList.add('female');
              }
        }
    }


    return table;
}
