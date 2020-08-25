





function initCarousel() {
  let rightBtn = document.querySelector('.carousel__arrow_right');
let leftBtn = document.querySelector('.carousel__arrow_left');
let contInner = document.querySelector('.carousel__inner');
let contWidth = document.querySelector('.carousel__inner').offsetWidth;
let contInnerStart = 0;
  let allWidth = -(3*contWidth);
  if(contInnerStart === 0) {
    leftBtn.style.display = 'none';
  };

  leftBtn.addEventListener('click', () => {
    contInner.style.transform = `translateX(${contInnerStart + contWidth}px)`;
    contInnerStart += contWidth;
    if(contInnerStart === 0) {
      leftBtn.style.display = 'none';
    };
    if(contInnerStart <= 0) {
      rightBtn.style.display = 'block';
    }
  });
  rightBtn.addEventListener('click', () => {
    contInner.style.transform = `translateX(${contInnerStart - contWidth}px)`;
    contInnerStart -= contWidth;
    if(contInnerStart < 0) {
      leftBtn.style.display = 'block';
    };
    if(contInnerStart === allWidth) {
      rightBtn.style.display = 'none';
    };
  });





}
