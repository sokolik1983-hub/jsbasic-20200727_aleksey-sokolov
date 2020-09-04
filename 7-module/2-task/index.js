import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    let body = document.querySelector('body');
    let modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `<!--Прозрачная подложка перекрывающая интерфейс-->
      <div class="modal__overlay"></div>
      <div class="modal__inner">
        <div class="modal__header">
          <!--Кнопка закрытия модального окна-->
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>
          <h3 class="modal__title">
          </h3>
        </div>
  
        <div class="modal__body">
       
        </div>
      </div>`

    let modalTitle = modal.querySelector('.modal__title');
    let closeBtn = modal.querySelector('.modal__close');
   
    

    this.open = function() {
      body.append(modal);
      body.className = 'is-modal-open';
      };


    this.setTitle = function(word) {
      modalTitle.innerHTML = word;
    };


    this.setBody = function(node) {
      let modalBody = modal.querySelector('.modal__body');
      modalBody.appendChild(node);
    }
    this.close = function() {
      modal.remove();
      body.classList.remove('is-modal-open');
    }
    closeBtn.onclick = this.close;

    document.onkeydown = function (event) {
      if (event.code === 'Escape'){
      modal.remove();
      body.classList.remove('is-modal-open');
      }
      
    }
  }
}
