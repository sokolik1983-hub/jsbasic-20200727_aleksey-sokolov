export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.render(steps, value);
    this.moveClick();
    
  }
  moveClick() {
    
    let elem = this.elem;
    let spans = elem.querySelectorAll('span');
    let steps = spans.length-1;
    let sliderProgress = elem.querySelector('.slider__progress');
    let btn = elem.querySelector('.slider__thumb'); 
    
    elem.addEventListener('click',() => { 
      let sliderWidth = elem.offsetWidth;
      let oneStep = sliderWidth/(steps-1);
      let distance = elem.getBoundingClientRect();
      let clickX = event.clientX - distance.left;
      let sliderValue = elem.querySelector('.slider__value');
      let countCheck = clickX/oneStep;
      countCheck = Math.round(countCheck);
      btn.style.left = (countCheck*oneStep) + "px";
      sliderProgress.style.left = (countCheck*25)+"%";
      sliderValue.textContent = countCheck;
      
      Array.from(spans).forEach(item => {
        item.classList.remove('slider__step-active');
        spans[countCheck+1].classList.add('slider__step-active');
      });

      let event1 = new CustomEvent('slider-change', { // имя события должно быть именно 'slider-change'
        detail: countCheck, // значение 0, 1, 2, 3, 4
        bubbles: true // событие всплывает - это понадобится в дальнейшем
      });
      elem.dispatchEvent(event1);
    });
    
    
  }
  render(steps, value){
    let slider = document.createElement('div');
    slider.className = 'slider';
    let spansBlock = document.createElement('div');
    spansBlock.className = 'slider__steps';
    
    for ( let i = 0; i < steps; i++) {
      let spans = document.createElement('span');
      spansBlock.appendChild(spans);
    }
    let firstElement = spansBlock.querySelectorAll('span');
    firstElement[value].className = 'slider__step-active';

    slider.innerHTML = `<div class="slider__thumb">
    <span class="slider__value">0</span>
  </div><div class="slider__progress"></div>`;
  slider.appendChild(spansBlock);

  this.elem = slider;

  }
}
