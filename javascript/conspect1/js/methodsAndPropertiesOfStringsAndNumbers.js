"use strict";

// методы и свойства строк и чисел

const str = "test";
const arr = [1, 2, 3];

console.log(str[2]); // s

console.log(str.toUpperCase()); // TEST

console.log(str.toLowerCase()); // test селает нижний регистр

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit")); // 5 ищет строку

const logg = "Hello world!";

console.log(logg.slice(6, 11)); // world

console.log(logg.substring(6, 11)); // world

console.log(logg.substr(6, 5)); // тут мы начинаем с 6 ого символа и вырезаем 5 символов

console.log(arr.length);

const num = 12.2;
console.log(Math.round(num)); // 12 округление

const test = "12.2px";
console.log(parseInt(test)) // превращает в другую систему счисления
console.log(parseFloat(test)); 12.2 // возвращает в 10ой системе счисления