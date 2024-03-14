"use strict";

// Передача данных по ссылке или по значению

let a = 5,
    b = a;

b = b + 5;
console.log(a);
console.log(b);

const obj = {
    a: 5,
    b: 1
};

const copy = obj; // передает ссылку( т. е. модифицируем объект)

copy.a = 10;

console.log(copy);
console.log(obj);

function copyFunc (mainObj){ // мы копируем весь старый объект (mainObj) в новый нустой objCopy и возвращаем его
    let objCopy = {};

    for(let key in mainObj){
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copyFunc(numbers);

newNumbers.a = 10;
newNumbers.c.x = 15; // тут мы обратились по ссылке (т. к. в numbers ссылка на вложенный объект "c" по этому объект "c" поменялся) 

console.log(newNumbers);
console.log(numbers);

/////

const add ={
    d: 17,
    e: 20
};

//console.log(Object.assign(numbers, add)); // соединяем объект add и numbers

const clone = Object.assign({}, add); // тут просто получаем копию add
clone.d = 32;

console.log(add);
console.log(clone);

/////

const oldArr = ['a', 'b', 'c'];
const newArr = oldArr.slice(); // копия массива

newArr[1] = 'ahaha38';

console.log(newArr);
console.log(oldArr);

/////
//оператор spread

const video = ['youtube', 'vimeo', 'rutube', 'kinopoisk'],
      blogs = ['wordpress', 'livejournal', 'blogs'],
      internet = [...video, ...blogs, 'vk', 'telega']; // "..." - оператор разворота

console.log(internet);

function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num); // ... - разложила массив на отдельные элементы

//////

const array = ["a", "b", "c"];
const newArray = [...array]; // тут лежит новая копия array (только тут уже spread оператор (оператор разворота))

const q = {
    one: 1,
    two: 2
};

const newQ = {...q}; // ну тоже самое и с объектами
newQ.a = 50;
newQ.b = "hehe21";

console.log(newQ);