import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  
  constructor(slides) {
    this.render(slides);
  }
  render(slides) {
    this.slides = slides;
    let list = slides.map((item) => `<div class="carousel__slide" data-id="${item.id}">
    <img src="/assets/images/carousel/${item.image}" class="carousel__img" alt="slide">
    <div class="carousel__caption">
      <span class="carousel__price">€${item.price}</span>
      <div class="carousel__title">${item.name}</div>
      <button type="button" class="carousel__button">
        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
      </button>
    </div>
  </div>`);
    let carousel = document.createElement('div');
    carousel.className = 'carousel';
    let arrows = `<div class="carousel__arrow carousel__arrow_right">
    <img src="/assets/images/icons/angle-icon.svg" alt="icon">
  </div>
  <div class="carousel__arrow carousel__arrow_left">
    <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
  </div>`;
    carousel.innerHTML = arrows;
    let contInner = document.createElement('div');
    contInner.className = 'carousel__inner';
    
    contInner.innerHTML = list;
    carousel.append(contInner);

    this.elem = carousel;
    





    let rightBtn = carousel.querySelector('.carousel__arrow_right');
    let leftBtn = carousel.querySelector('.carousel__arrow_left');
    let contInner1 = carousel.querySelector('.carousel__inner');

  let contInnerStart = 0;
  let currentSlide = 0;
  let allSlides = (contInner1.querySelectorAll('.carousel__slide').length) -1;
  console.log(allSlides);

  if(contInnerStart === currentSlide) {
    leftBtn.style.display = 'none';
  };

  leftBtn.addEventListener('click', () => {
    currentSlide--;
    let contWidth = carousel.querySelector('.carousel__inner').offsetWidth;
    let allWidth = -(allSlides*contWidth);
    contInner1.style.transform = `translateX(${contInnerStart + contWidth}px)`;
    contInnerStart += contWidth;
    if(contInnerStart === currentSlide) {
      leftBtn.style.display = 'none';
    };
    if(contInnerStart <= currentSlide) {
      rightBtn.style.display = 'block';
    }
  });
  rightBtn.addEventListener('click', () => {
    currentSlide++;
    let contWidth = carousel.querySelector('.carousel__inner').offsetWidth;
    let allWidth = -(allSlides*contWidth);
    contInner1.style.transform = `translateX(${contInnerStart - contWidth}px)`;
    contInnerStart -= contWidth;
    if(contInnerStart < currentSlide) {
      leftBtn.style.display = 'block';
    };
    if(contInnerStart === allWidth) {
      rightBtn.style.display = 'none';
    };
  });




  let btn = carousel.querySelectorAll('.carousel__button').forEach(element => element.onclick= function() {
    let parentBox = element.closest('.carousel__slide');
    let parentBoxId = parentBox.getAttribute('data-id');
    let event1 = new CustomEvent("product-add", { // имя события должно быть именно "product-add"
      detail: parentBoxId, // Уникальный идентификатора товара из объекта товара
      bubbles: true // это событие всплывает - это понадобится в дальнейшем
  });
    this.dispatchEvent(event1);
  });
    
  }
  
}
