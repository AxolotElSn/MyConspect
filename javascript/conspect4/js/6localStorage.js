'use strict';

// localStorage.setItem('number', '5'); // добавление в глобальный объект localStorage. 1 аргумент - ключ, то есть название. 2 аргумент - значение. Ну коточе как в объект записываем
// localStorage.setItem('number2', '10');

// localStorage.getItem('number'); // получение данных из localStorage
// console.log(localStorage.getItem('number')) // 5

// localStorage.removeItem('number2'); // удаление из localStorage

// localStorage.clear(); // просто очищает localStorage


// Делаем так чтоб при перезагрузке страницы не удалялась галочка и не убирался цвет
const checkbox = document.querySelector('#checkbox'),
      form = document.querySelector('form'),
      change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) { // нужно чтоб при перезагрузке не слетала галочка
    checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
    if (localStorage.getItem('isChecked')) {
        localStorage.removeItem('isChecked')
    } else {
        localStorage.setItem('isChecked', true);
    }
});

if (localStorage.getItem('bg') === 'changed') { // этот if нужен для того чтоб при перезагрузке не слетал цвет
    form.style.backgroundColor = 'green';
}

change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'green';
    }
});



const persone = {
    name: 'Alex',
    age: 25
};

// так заносить объект в localStorage
const serializedPersone = JSON.stringify(persone); // сначала преобразуем в json
localStorage.setItem('alex', serializedPersone); // потом json заносим в 
localStorage.setItem('alex', serializedPersone); // потом json заносим в 

console.log(JSON.parse(localStorage.getItem('alex'))) // а тут уже используем, преобразуя в обычный объект


