"use strict";

// Основы ООП, прототипно-ориентированное наследование

let str = "some";
let strObj = new String(str);

// console.log(strObj);

// console.log(typeof(str)); // string
// console.log(typeof(strObj)); // object

console.dir([1,2,3]);

const solder = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log("Hello");
    }
};

const john = Object.create(solder); // делает объект john наследником объекта solder

// const john = {
//     health: 100
// };

//john.__proto__ = solder; // объект john наследует данные из solder. Данный метод устаревший

Object.setPrototypeOf(john, solder) // тоже самое, так и надо писать

console.log(john.armor);
john.sayHello();