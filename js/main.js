'use strict';

(function(){
  var OPEN_CLASS = 'main__reservation-form_open';
  var CLOSE_CLASS = 'main__reservation-form_close';

  var form = document.querySelector('.main__reservation-form');
  var formButton = document.querySelector('.main__search-button');
  var onFormButtonClick = function () {
    if(form.classList.contains(CLOSE_CLASS)) {
      form.classList.remove(CLOSE_CLASS);
      form.classList.add(OPEN_CLASS);
    } else {
      form.classList.remove(OPEN_CLASS);
      form.classList.add(CLOSE_CLASS);
    }
  };
  formButton.addEventListener('click', onFormButtonClick);
  onFormButtonClick();
})();

(function(){
  var MAP_URL = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d591303.5194106619!2d-111.61407434645125!3d35.04417926880297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872da132f942b00d%3A0x5548c523fa6c8efd!2z0KHQtdC00L7QvdCwLCDQkNGA0LjQt9C-0L3QsCA4NjMzNiwg0KHQqNCQ!5e0!3m2!1sru!2sru!4v1545380943215';
  var WIDTH = 1200;
  var HEIGHT = 594;
  var iframe = document.createElement('iframe');
  iframe.width = WIDTH;
  iframe.height = HEIGHT;
  iframe.setAttribute('frameborder', 0);
  iframe.src = MAP_URL;
  var mapContainer = document.querySelector('.main__map');
  mapContainer.removeChild(mapContainer.querySelector('img'));
  mapContainer.appendChild(iframe);
})();
