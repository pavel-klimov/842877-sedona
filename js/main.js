'use strict';

(function(){
  var OPEN_CLASS = 'main__reservation-form_open';
  var CLOSE_CLASS = 'main__reservation-form_close';

  var form = document.querySelector('.main__reservation-form');
  var formButton = document.querySelector('.main__search-button');
  var onFormButtonClick = function (evt) {
    evt.preventDefault();
    if(form.classList.contains(CLOSE_CLASS)) {
      form.classList.remove(CLOSE_CLASS);
      form.classList.add(OPEN_CLASS);
    } else {
      form.classList.remove(OPEN_CLASS);
      form.classList.add(CLOSE_CLASS);
    }
  };
  formButton.addEventListener('click', onFormButtonClick);
})();
