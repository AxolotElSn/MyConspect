// События на мобильных устройствах
'use strict';

// touchstart срабатывает когда касаемся
// touchmove срабатывает когда двигаем пальцем
// touchend срабатывает когда палец перестает касаться
// touchenter когда ведем палец по экрану и заходим на элемент с этим событием 
// touchleave когда палец скользит и ушел за пределы элемента
// touchcancel когда палец выходит за пределы браузера

document.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault; // отменяем стандартное поведение браузера

        console.log('start');
        console.log(e.touches)
    });

// свойства
// toches свойство выдает список всех пальцев которые в данный момент взаимодействует с экраном
// targetTouches свойство выдает список всех пальцев которые в данный момент взаимодействует с этим элементом
// changedTouches свойство выдает список всех пальцев которые учакствуют в текущем событии. Напимер если у нас событие touchend, то changedTouches выдаст только палец который мы оторвали от экрана

        box.addEventListener('touchmove', (e) => {
        e.preventDefault;

        console.log(e.targetTouches[0].pageX); // пример, отслеживаем координаты
    });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault;

    //     console.log('end');
    // });
});

