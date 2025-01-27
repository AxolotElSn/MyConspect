'use strict';

//тип данных symbol

// let id = Symbol('id');

const obj = {
    name: 'Test', // name можно записать в ковычках т к это тоже строка
    [Symbol('id')]: 1 // мы не можем обратиться к символу. Символы позволяют создавать скрытые при обычном доступе свойства которые не показываются при переборе объекта
    // getId: function() { // метод для получения id из символа
    //     return this[id];
    // }
}

// let id = Symbol('id'); // Symbol - тоже свойство объекта
// let id2 = Symbol('id'); // Symbol уникальны и не равны друг другу
// obj[id] = 1;

// console.log(id == id2); // false

console.log(obj);

// console.log(obj.getId());

console.log(Object.getOwnPropertySymbols(obj)); // получаем массив ссылок на символовы объекта
console.log(obj[Object.getOwnPropertySymbols(obj)[0]]); // так получаем уже значение символа так его можно менять

for (let value in obj) {
    console.log(value); // выведет только свойство name
}

// пример

const myAwesomeDB = {
    movies: [],
    actors: [],
    // idd: 123 // id не должен менятся
    [Symbol("idd")]: 123,
    [Symbol.for("test2")]: 555 // for делает символ не уникальным и к ссылке можно юудет обратится
}

// сторонний код библиотеки

myAwesomeDB.idd = '5455748674'; // допустим что мы меняем id но мы не должны это делать

console.log(myAwesomeDB["idd"]); // 5455748674
console.log(myAwesomeDB); // { movies: [], actors: [], idd: '5455748674', [Symbol(idd)]: 123 }

console.log(myAwesomeDB[Symbol.for('test2')]); // так обращаемся к символу
