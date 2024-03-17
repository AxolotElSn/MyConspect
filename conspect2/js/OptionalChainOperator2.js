// Оператор опциональной цепочки

'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block)

// if (block) {
//     console.log(block.textContent); // если не положить в условие, то будет ошибка т к block нет на странице. Код дальше не пойдет и все что ниже не выполнится
// }

console.log(block?.textContent); // ? - оператор опциональной цепочки - проверяет значение слева от себя. Если оно имеет значение null или undefined, то он останавливает операцию и возвращает undefined
// block?.textContent = '123'; // Ошибка. Мы получили undefined и пытаемся тутда записать 123. По этому получаем ошибку

console.log(1 + 2); // не выпонится если сверху будут ошибки. Код после ошибки дальше не пойдет

const userData = {
    name: 'Alex',
    age: null,
    say: function() {
        console.log('Hello1');
    }
}

userData.say();
userData.noMet?.(); // то же самое. Важно что надо ставить точку ?.

// const userData = null;

// if(userData && userData.skills && userData.skills.js){ // так делать не надо
//     console.log(userData.skills.js);
// }

console.log(userData?.skills?.js); // оператор проверит часть слева от себя, если она существует, то код пойдет дальше, если нет, то код прекратится и выведет undefined