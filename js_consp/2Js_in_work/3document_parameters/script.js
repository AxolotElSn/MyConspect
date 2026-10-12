// Параметры документы, окна и работа с ними
'use strict';

const box = document.querySelector('.box');

const width = box.clientWidth; // так можно получить высоту и длину любого элемента. см картинку
const height = box.clientHeight;

console.log(width, height);

const offsetWidth = box.offsetWidth; // Так можно получить высоту и длинну с учетом бордеров и полосы прокрутки. см картинку
const offsetHeight = box.offsetHeight;

console.log(offsetWidth, offsetHeight);

const scrollWidth = box.scrollWidth; // Так можно получить высоту и длинну всей прокрученной области в полную длинну и высоту. см картинку
const scrollHeight = box.scrollHeight;

console.log(scrollWidth, scrollHeight);

console.log(document.documentElement.scrollTop); // Этих свойств нет у объекта Document, они принадлежат отбъекту documentElement


const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    box.style.height = box.scrollHeight + 'px'; // так можно развернуть весь скролл
    console.log(box.scrollTop); // так можно узнать на сколько мы проскролили
});

console.log(box.getBoundingClientRect()); // метод возвращает объект со всеми координатами элемента

const style = window.getComputedStyle(box); // метод возвращающий большой объект стилей которые уже применены к элементу
console.log(style);

console.log(style.display); // block


