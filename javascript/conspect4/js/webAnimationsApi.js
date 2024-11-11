'use strict';

const btnPhone = document.querySelector('#iphone'),
      btnMacbook = document.querySelector('#macbook'),
      images = document.querySelectorAll('img');

// const phoneAnimate = images[0].animate([ // перывй аргумент - массив объектов с ключевыми кадрами (нач. точка, промежуточные точки и конечная точка)
//     {transform: 'translateY(0)'},
//     {transform: 'translateY(100px)'},
//     {transform: 'translateY(-100px)'},
//     {transform: 'translateY(0)'}
// ], { // второй аргумент - объект с настройками
//     duration: 3000, // сколько длится анимация
//     iterations: Infinity // кол-во повторений (вечно)
// });

let phoneAnimation;
btnPhone.addEventListener('click', () => {
    if (!phoneAnimation) { // если анимации не существует, то создаем
       phoneAnimation = images[0].animate([ 
            {
            transform: 'translateY(0) rotate(0deg)',
            filter: 'opacity(100%)'
            },
            {
            transform: 'translateY(100px) rotate(180deg)',
            filter: 'opacity(50%)'
            },
            {
            transform: 'translateY(-100px) rotate(270deg)',
            filter: 'opacity(75%)'
            },
            {
            transform: 'translateY(0) rotate(360deg)',
            filter: 'opacity(100%)'
            }
        ], { 
            duration: 3000,
            iterations: Infinity 
        });
    } else {
        if (phoneAnimation.playState === 'paused') { // если анимация на паузе, то запускаем
            phoneAnimation.play();
        } else {
            phoneAnimation.pause(); // иначе ставим на паузу
        }
    }
})