import $ from 'jquery';

function initExample() {
  $('.js--example--js').html('Hello from JS!');
}

function exampleReady() {
  if ($('.js--example--js').length) {
    initExample();
  }
}

document.addEventListener('turbolinks:load', exampleReady);
