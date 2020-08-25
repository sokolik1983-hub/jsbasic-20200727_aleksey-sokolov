
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {
    constructor(rows) {
        this.render(rows);
        this.onClick();
      }
      onClick(event) {
        let elem = this.elem;
        let btn = elem.querySelectorAll('.btn').forEach(element => element.onclick= function() {
          let parentBox = element.closest('tr');
          parentBox.remove();
        });
      }
      render(rows) {
        let list = rows.map((item) => `<tr><td>${item.name}</td><td>${item.age}</td><td>${item.salary}</td><td>${item.city}</td><td><button class="btn">X</button></td></tr>`);
       let table = document.createElement('table');;
       table.innerHTML = "<thead><tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr></thead>" + list;
    
        this.elem = table;
        
      }
  }

