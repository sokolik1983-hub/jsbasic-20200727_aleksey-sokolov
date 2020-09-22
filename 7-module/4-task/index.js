export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.render(steps, value);
    this.moveClick();
    this.drudDrop();
    
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
      let segments = steps - 1;
      let widthPercents = countCheck / segments * 100;

      
      btn.style.left = widthPercents + "%";
      sliderProgress.style.width = widthPercents + "%";
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
  drudDrop() {
    let elem = this.elem;
    let thumb = this.elem.querySelector('.slider__thumb');
    let sliderProgress = elem.querySelector('.slider__progress');
    let spans = elem.querySelectorAll('span');
    let sliderValue = elem.querySelector('.slider__value');
    let steps = spans.length-1;
 
    thumb.ondragstart = () => false;
   
    
    
    thumb.addEventListener('pointerdown', () => {
        thumb.style.position = 'absolute';
        thumb.style.zIndex = '1000';
        elem.classList.add('slider_dragging');
        
      function onMouseMove(event) {
        let distance = elem.getBoundingClientRect();
        let abcd = `${event.pageX - distance.x}`;
        let sliderWidth = (elem.offsetWidth)/100;


        let oneStep = elem.offsetWidth/(steps-1);
        let countCheck = abcd/oneStep;
        countCheck = Math.round(countCheck);
      

        let proc = (abcd/sliderWidth);
        
      
        thumb.style.left = proc + "%";
        sliderProgress.style.width = proc + "%";
        if(proc < 0){
          thumb.style.left = 0 + "%";
          countCheck = 0;
        } else if (proc > 100) {
          thumb.style.left = 100 + "%";
          sliderProgress.style.width = 100 + "%";
          countCheck = (steps-1);

        }
        sliderValue.textContent = countCheck;
        this.value = countCheck;
    

        
        thumb.addEventListener('pointerup', () => {
          elem.classList.remove('slider_dragging');
          let event1 = new CustomEvent('slider-change', { // имя события должно быть именно 'slider-change'
        detail: this.value, // значение 0, 1, 2, 3, 4
        bubbles: true // событие всплывает - это понадобится в дальнейшем
      })
      elem.dispatchEvent(event1); 
        })
 
      }
 
        document.addEventListener('pointermove', onMouseMove);
        document.onpointerup = function() {
          document.removeEventListener('pointermove', onMouseMove);
          document.onpointerup = null;
        }
        
    });
    
  }







<<<<<<< HEAD
}
=======
}
>>>>>>> 8137f6e9006ce73decaa947bf4b4a32d939c732a
