// setTimeout, setInterval. Скрипты и время их выполнения
'use strict';

const timerId1 = setTimeout(function() { // setTimeout() принимает как аргумент ф-ию которую он запустит через определенный промежуток времени
    // console.log("Hello!");
}, 2000); // Вторым аргументом вводим время, через которое хотим запустить ф-ию в миллисекундах

const timerId2 = setTimeout(function(text) { 
    // console.log(text);
}, 3000, 'Hello2!'); // третий аргумент мы передаем в ф-ию которую запускаем 


const loggerTimer = setTimeout(logger1, 4000); // Можем передать готовую ф-ию

function logger1() {
    // console.log('text')
}

// Переменная в которую мы кладет setTimeout() содержит в себе id этого таймера. Это нужно для того чтоб, при необходимости, остановить таймер
const clearTimer = setTimeout(clearFunc, 10000)
clearInterval(clearTimer); // остановили таймер

function clearFunc() {
    console.log('clear');
}

//////////////////////////////////////////////////////////

const btn = document.querySelector('.btn');
let timerId; // Пустая переменнаяЮ когда мы кликнем по кнопке, сюда запишется id таймера
let i = 0;

btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 500); // Тоже самое что и таймер, но ф-ия будет повторяться каждые 2 секунды

});

function logger() {
    if (i == 3) {
        clearInterval(timerId);
    }
    // console.log('text');
    i++;
}

/////////
let id = setTimeout(function log() {
    // console.log('Hello!');
    id = setTimeout(log, 500); // рекурсивный вызов таймера. Смысл в том, что если ф-ия сложная и выполняется долго, то таймер будет дожидаться ее выполнения
}, 500);

////////

function myAnimation() {
    const element = document.querySelector('.box');
    let position = 0;
    let direction = 1;

    const id = setInterval(frame, 10);
    function frame() {
        if (position == 300) {
            clearInterval(id)
        } else {
            position++;
            element.style.top = position + 'px';
            element.style.left = position + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);





