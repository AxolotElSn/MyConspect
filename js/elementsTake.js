"use strict";

const box = document.getElementById('box'); // обращаемся к элементу по id

console.log(box); // <div class="box" id="box"></div>

// const btns = document.getElementsByTagName('button');
// console.log(btns); // получаем псевдомассив

// const btns = document.getElementsByTagName('button')[1]; // получаем 2ую кнопку
// console.log(btns);

const btns = document.getElementsByTagName('button'); // обращаемся к элементу по тегу
console.log(btns[1]); // получаем 2ую кнопку. просто другой вариант записи :3

const circles = document.getElementsByClassName('circle'); // обращаемся к элементу по классу
console.log(circles); // так же получаем html-коллекцию. Ну псевдомассив короче :D

const hearts = document.querySelectorAll('.heart'); // тут мы обращаемся по css селектору. А так же тут можно использовать forEach()
console.log(hearts);
 hearts.forEach(item => {
    console.log(item);
 });

 const oneHeart = document.querySelector('.heart'); // получает один элемент со страницы. Точнее первый элемент
 console.log(oneHeart);