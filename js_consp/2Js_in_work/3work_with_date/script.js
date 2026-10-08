// Работа с датами
'use strict';

const now = new Date();
new Date.parse('2026-10-08') // Вариант записи. Тоже самое что записывать как сверху

console.log(now.getFullYear()); // 2026 // методы объекта Date
console.log(now.getMonth()); // 9
console.log(now.getDate()); // 8
console.log(now.getDay()); // 4 // День недели
console.log(now.getUTCHours()); // 13 // UTC после get - получить с часовым поясом +0

console.log(now.getTimezoneOffset()); // -240 // Получаем разницу между нашим часовым поясом и utc
console.log(now.getTime()); // 1791467516851 // Кол-во миллисекунд от 1ого января 1970г

console.log(now.setHours(18)); // устанавливаем часы 


let start = new Date();

for (let i = 0; i < 1000000; i++) {
    let some = i ** 3;
}

let end = new Date();

console.log(`Цикл отработал за ${end - start} миллисекунд`); // Так можно замерить время выполнения цикла и тд
