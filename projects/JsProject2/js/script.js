'use strict';

window.addEventListener('DOMContentLoaded', () => {
   const tabs = require('./modules/tabs'),
         modal = require('./modules/modalWindow'),
         timer = require('./modules/timer'),
         cards = require('./modules/cards'),
         calc = require('./modules/calculating'),
         forms = require('./modules/forms'),
         slider = require('./modules/slider');
         
   tabs();
   modal();
   timer();
   cards();
   calc();
   forms();
   slider();

});