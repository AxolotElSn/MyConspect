'use strict';
// Полифил — это фрагмент кода, который позволяет использовать современную функциональность в более старых браузерах, которые не поддерживают ее по умолчанию
require('es6-promise').polyfill(); // добавляем полифил (их все надо устанавливать)
import 'nodelist-foreach-polyfill'; // по сути мы импортируем из node_modules
// импорты должны стоять до обработчика
import tabs from './modules/tabs';
import modal from './modules/modalWindow';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calculating';
import forms from './modules/forms';
import slider from './modules/slider';
import {openModal} from './modules/modalWindow';

window.addEventListener('DOMContentLoaded', () => {
      const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000); // переменная которая содержит id таймера
//    const tabs = require('./modules/tabs'),
//          modal = require('./modules/modalWindow'),
//          timer = require('./modules/timer'),
//          cards = require('./modules/cards'),
//          calc = require('./modules/calculating'),
//          forms = require('./modules/forms'),
//          slider = require('./modules/slider');
         
   tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
   modal('[data-modal]', '.modal', modalTimerId); // подставляем те аргументы которые используем
   timer('.timer', '2025-06-05');
   cards();
   calc();
   forms('form', modalTimerId);
   slider({
      container: '.offer__slider',
      nextArrow: '.offer__slider-next',
      slide: '.offer__slide',
      prevArrow: '.offer__slider-prev',
      totalCounter: '#total',
      currentCounter: '#current',
      wrapper: '.offer__slider-wrapper',
      filed: '.offer__slider-inner'
   });

   // каждый модуль должен быть не зависим от других модулей

});