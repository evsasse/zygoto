import * as $ from 'jquery';

const initExample = (): void => {
  $('.js--example--ts').html('Hello from TS!');
};

const exampleReady = (): void => {
  if ($('.js--example--ts').length) {
    initExample();
  }
};

document.addEventListener('turbolinks:load', exampleReady);
