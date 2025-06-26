// Работа с датами
'use strict';

const now = new Date();

console.log(now.setHours(18)); // устонавливаем часы. (консоль vs-code ориентируется на UTC, а консоль браузера на локальные данные компа. Так что в браузере мы получим правильное время)
console.log(now);

// console.log(now.getFullYear()); // год
// console.log(now.getMonth()); // месяц (месяц считается от нулевого. То есть январь - 0 месяц, а декабрь - 11)
// console.log(now.getDate()); // число
// console.log(now.getDay()); // получаем день недели
// console.log(now.getHours()); // наше время
// console.log(now.getUTCHours()); // время +0 пояс

// console.log(now.getTimezoneOffset()); // получаем разничу между нашим часовам поясом и UTC в минутах
// console.log(now.getTime()); // получаем кол-во миллисекунд начиная 01/01/1970 до сего момента. Если полученное число поместить в Date() то получим дату

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3; // ** возведение в степень
}

let end = new Date();

console.log(`Цикл отработал за ${end - start} миллисекунд`);

