'use strict';

// смотреть metric-all.png 
// все эти параметры измеряются в px, но сами по себе представляют только число. Если хотим их применить как css-свойства, то добавляем + 'px'

// clientHeight - высота элемента без бордеров и скрола
// clientWidth - ну а это ширина

const box = document.querySelector('.box');

const width = box.clientWidth;
const height = box.clientHeight;

console.log(width, height);

// offsetHeight - высота элемента но уже с бордером, марджином и скролом
// offsetWidth - ширина элемента 

const width2 = box.offsetWidth;
const height2 = box.offsetHeight;

console.log(width2, height2);

// scrollHeight - высота всего элемента с учетов высоты прокрутки, но ширина самого скрола не учитывается
// scrollwidth - тоже самое только с длиной 

const width3 = box.scrollWidth;
const height3 = box.scrollHeight;

console.log(width3, height3);

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    // box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect()); // метод дающий все координаты элемента. Низ, верх, лево, право

//computed - стили это те стили, которые уже применились к элементу
const style = window.getComputedStyle(box); // метод показывающий какие свойства применились к элементу. Так же позволяет получить стили псевдоэлементов. Для этого нужно написать второй аргумент
console.log(style.display);

console.log(document.documentElement.scrollTop) // у документа не существует свойства scrollTop. Это свойство элемента. По этому мы так обращаемся

//scrollBy - метод скролящий страницу с текущего положения
//scrollTo а этот скролит относительно всей страницы
