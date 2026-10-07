// События и их обработчики
'use strict';

const btns = document.querySelectorAll('button');
const overlay = document.querySelector('.overlay');

// btn.addEventListener('click', (e) => { // Событие которое срабатывает от клика на кнопку. e - это объект события, он всегда передается прервым аргументом. Назвать можно как угодно
//     console.log(e);
//     e.target.remove(); // target - элемент объекта события. target элемент на котором событие срабатывает
// });

// Обработчик срабатывает преимущественно на самом вложенном элементе

let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // e.target.remove();
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
}

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true}); // 3 аргумент это опции обработчика. onse: true Делает так что мы можем только один раз вызвать этот обработчик
});




const link = document.querySelector('a');

link.addEventListener('click', (event)=> {
    event.preventDefault(); // отмена стандартного поведения браузера. В нашем случае мы не будем переходить по ссылке
    console.log(event.target);
});



