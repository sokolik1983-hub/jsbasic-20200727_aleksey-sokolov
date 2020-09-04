import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.render(categories);
  }
  render(categories) {
    this.categories = categories;
    let cont = document.createElement('div');
    cont.className = 'ribbon';
    let leftBtn = `<button class="ribbon__arrow ribbon__arrow_left">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </button>`;
    let rightBtn = `<button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
  <img src="/assets/images/icons/angle-icon.svg" alt="icon">
</button>`; 
    let list = categories.map((item) => `<a href="#" class="ribbon__item" data-id="${item.id}">${item.name}</a>`);
    let navCont = `<nav class="ribbon__inner">${list.join('')}</nav>`;
  cont.innerHTML =rightBtn+navCont+leftBtn;

  

  this.elem = cont;


  let ribbonInner = cont.querySelector('.ribbon__inner');
  let rightBtn1 = cont.querySelector('.ribbon__arrow_right');
  let leftBtn1 = cont.querySelector('.ribbon__arrow_left');

  leftBtn1.addEventListener('click', () => {
    ribbonInner.scrollBy(-350, 0);
    let scrollLeft = Math.round(ribbonInner.scrollLeft);
    let scrollWidth = ribbonInner.scrollWidth;
    let contWidth = cont.scrollWidth;
    let toLeft = scrollWidth - contWidth;
    console.log(scrollLeft,toLeft)
    if ( scrollLeft === 0) {
      leftBtn1.classList.remove('ribbon__arrow_visible'); 
    }
    if ( toLeft > 0) {
      rightBtn1.classList.add('ribbon__arrow_visible');
    }
    
  });
  rightBtn1.addEventListener('click', () => {
    let scrollLeft = Math.round(ribbonInner.scrollLeft);
    let scrollWidth = ribbonInner.scrollWidth;
    let contWidth = cont.scrollWidth;
    let toLeft = scrollWidth - contWidth;
    ribbonInner.scrollBy(350, 0);
    if (toLeft >= scrollLeft) {
      leftBtn1.classList.add('ribbon__arrow_visible'); 
    }
    if (scrollLeft === toLeft) {
      rightBtn1.classList.remove('ribbon__arrow_visible');
    }  
  });

  let links = ribbonInner.querySelectorAll('.ribbon__item').forEach(element => element.onclick = function() {
   
    let links = ribbonInner.querySelectorAll('.ribbon__item');
    Array.from(links).forEach(item => {
      item.classList.remove('ribbon__item_active');
    })
    this.classList.add('ribbon__item_active');
    let categoryID = this.getAttribute('data-id');

  let event1 =  new CustomEvent('ribbon-select', {
  detail: categoryID, 
  bubbles: true
})
  this.dispatchEvent(event1);
  });
  }
}
