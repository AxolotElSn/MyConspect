"use strict";

// динамическая типизация

// // To string

// // 1)

console.log(typeof(String(null)));

// 2) конкатенация - сложение строки с чем-то. В нашем случае с числом

console.log(typeof(5 + '')); // при сложении со строкой мы всегда получаем строку

const num = 5;
console.log("https://vk.com/catalog/" + num); // пример

const fontSize = 26 + 'px'; // пример

// To number

//1)

console.log(typeof(Number('4')));

// 2)

console.log(typeof(+'5'));

// 3)

console.log(typeof(parseInt("15px", 10))) // 10 это 10чная система счисления


let answ = +prompt("Hello", "");

// To boolean

// 1)

// 0, '', null, undefined, NaN; - это все false

let switcher = null;

if (switcher){
    console.log('Working...'); // не выполнится
}

switcher = 1;

if (switcher){
    console.log('Working...'); // выполнится т. к. switcher не null
}

// 2)

console.log(typeof(Boolean('4')));

// 3)

console.log(typeof(!!"3142132")); // - boolean