'use strict';

localStorage.setItem('number', '5'); // добавление в глобальный объект localStorage. 1 аргумент - ключ, то есть название. 2 аргумент - значение. Ну коточе как в объект записываем

localStorage.getItem('number'); // получение данных из localStorage
console.log(localStorage.getItem('number')) // 5

