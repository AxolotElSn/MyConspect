'use strict';

// Оператор И запинается на первом false и дальше код не идет и его возвращает. Если все значения true, то тогда вернет последний true

const hamburger = 3;
const fries = 1;
const cola = 0;

console.log(hamburger === 3 && cola && fries);

console.log(1 && 0); // 0
console.log(1 && 5); // 5
console.log(null && 5); // null
console.log(0 && 'sfdg'); // 0

if (hamburger === 3 && cola && fries) {
    console.log('Все сыты');
} else {
    console.log('Мы уходим');
}


/////////////////////////////

// Оператор ИЛИ запинается на первом true и возвращает первый true. Если true нет в выражении, то возвращается последний false

const hamburger = 3;
const fries = 1;
const cola = 0;

if (hamburger || cola || fries) {
    console.log('Все довольны');
} else {
    console.log('Мы уходим');
}

console.log(hamburger || cola || fries)

/////////////////////////////

// Задача. Должно быть или 3 гамбургера, и 2 колы. Лтбо 3 картошки и хотя бы одни нагетсы

const hamburger = 3;
const fries = 3;
const cola = 0;
const nuggets = 2;

if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
    console.log('Все хорошо')
} else {
    console.log('Мы уходим')
}