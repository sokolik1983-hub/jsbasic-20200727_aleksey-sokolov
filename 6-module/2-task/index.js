import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this.render(product);
  
  };
render(product) {
  let card = product;
  this.image = card.image;
  this.price = card.price;
  this.name = card.name;
  this.id = card.id;

  let elem = document.createElement('div');
  elem.innerHTML = `<div class="card__top">
  <img src="/assets/images/products/${this.image}" class="card__image" alt="product">
  <span class="card__price">€${this.price.toFixed(2)}</span>
</div>
<div class="card__body">
  <div class="card__title">${this.name}</div>
  <button type="button" class="card__button">
      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
  </button>
</div>`;
  this.elem = elem;
  let btn = this.elem.querySelector('.card__button');

  btn.addEventListener('click', function(event) {
  let event1 = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
  detail: card.id, // Уникальный идентификатора товара из объекта товара
  bubbles: true // это событие всплывает - это понадобится в дальнейшем
});
elem.dispatchEvent(event1);

  });
}
}
