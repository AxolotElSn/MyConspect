'use strict';

// Превращаем в строку

// 1)
console.log(typeof(String(null))); // string   String - команда превращающая в строку
console.log(typeof(String(4))); // string

// 2)

console.log(typeof(5 + '')); // string  конкатинация - это сложение строки с чем-то. В нашем случае с числом. Итого получим строку

const num = 5;

console.log("https://vk.com/catalog/" + num); // https://vk.com/catalog/5 (Просто пример)

const fontSize = 26 + 'px'; (пример)

// Превращаем в число

// 1) 
console.log(typeof(Number('4'))); // number   Number - команда превращающая в число

// 2) 
console.log(typeof(Number(+'10'))); // number Унарный плюс. Ставим + перед строкой => превращается в число
let answer = +prompt('Hello', ''); // пример

// 3)
console.log(typeof(parseInt('15px', 10))) // number 1 аргумент - строка которую преобразуем, 2 аргумент - система счисления 


// Преобразуем в логическое значение boolean

// 0, '', null, undefined, NaN все эти значения ВСЕГДА false

let switcher = null; // false

// 1)

if (switcher) {
    console.log('Working...'); // условие не сработало
}

switcher = 1;
if (switcher) {
    console.log('Working...'); // Working...
}

//2)

console.log(typeof(Boolean('4')))

