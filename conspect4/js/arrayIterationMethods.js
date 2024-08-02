'use strict';

// эти методы возвращают новый массив, не изменяя при этом изначальный
// filter - фильтрует элементы внутри массива

// const names = ['Ann', 'Nicolay', 'Alex', 'Ksenya', 'Elena', 'Alexander'];

// const shortNames = names.filter(function(name) {
//     return name.length < 5; // вернем все элементы меньше 5 символов и сформируем из них новый массив
// });

// console.log(shortNames); // [ 'Ann', 'Alex' ]



// map - меняет элементы массива (к примеру можно поставить элементы в нижний регистр)

// const answers = ['Alex', 'ann', 'aLEXANDER', 'KSEnyA', 'niKolAs'];

// const result = answers.map(item => {
//     return item.toLowerCase(); // [ 'alex', 'ann', 'alexander', 'ksenya', 'nikolas' ]
// });

// // const result = answers.map(item => item.toLowerCase()); // можно записать так (напоминание)

// console.log(result);



// every/some - методы возвращают булиновое значение

// const some = [4, 'UwU', 'gsogrpgfk'];
// console.log(some.some(item => typeof(item) === 'number')); // true проверяем, есть ли в массиве хотя бы одно число
// console.log(some.every(item => typeof(item) === 'number')); // false проверяем, если все элементы в массиве являются числом тогда true



// reduce - собирает массив в одно единое целое

// const arr = [4, 5, 1, 3, 2, 6];

// const result = arr.reduce((sum, current) => { // sum - это сумма всех элементов, а current это каждый элемент. Как работает: изначально sum = 0, а current 4 (в нашем случае). Это первай проход ф-ии. Потом sum = 4, current = 5. Далее sum = 9, current = 1. И т. д. То есть каждый раз current прибавляется к sum 
//    return sum + current;
// }, 5); // 5 - третий аргумент это начальное значение sum, при необходимости. То есть массив будет собираться с пяти

// console.log(result); // 21

// const arr = ['apple', 'melon', 'pear', 'banana'];

// const result = arr.reduce((sum, current) => { 
// //    return sum + ', ' + current; // apple, melon, pear, banana
//     return `${sum}, ${current}` // apple, melon, pear, banana
// }); 

// console.log(result);


const obj = {
    alex: 'persone',
    ann: 'persone',
    dog: 'amimal',
    cat: 'animal'
};

// const newArr = Object.entries(obj); // метод превращающий объект в двумерный массив (матрицу). Получаем массив с массивами
// console.log(newArr); // [ [ 'alex', 'persone' ], [ 'ann', 'persone' ], [ 'dog', 'amimal' ], [ 'cat', 'animal' ] ]

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone') // [ [ 'alex', 'persone' ], [ 'ann', 'persone' ] ]
.map(item => item[0]); //[ 'alex', 'ann' ]

console.log(newArr); // [ 'alex', 'ann' ]


