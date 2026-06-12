'use strict';

let a = 5;
let b = a;

b = b + 5;

console.log(b); // 10
console.log(a);  // 5

const obj = {
    a: 5,
    b: 1
};

const copy = obj; // сюда помещается ссылка на объект, а не его копия
copy.a = 10
// модифицируется и копия и изначальный объект

console.log(copy); // { a: 10, b: 1 }
console.log(obj); // { a: 10, b: 1 }

/////////////

// Ниже поверхностная копия. Она затрагивает только родительские свойства, при этом вложенные структуры будут иметь ссылочный тип данных и при внесении изменений во вложенные объекты копии, в оригинальном объекте, тоже будут изменения

function copy(mainObj) {
    let objCopy = {};
    
    let key;
    for (key in mainObj) {
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

const newNumbers = copy(numbers);

newNumbers.a = 10;
console.log(newNumbers); // получилась копия numbers c измененирями. При этом оригинальный объект не затронут

newNumbers.c.x = 10;
console.log(numbers); // { a: 2, b: 5, c: { x: 10, y: 4 } } изменения есть и в оригинальном объекте, только во вложенных структурах

//////////

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add)); // Object.assign - объединяет 2 объекта. Первый аргумент, тот объект в который мы помещаем второй

const clone = Object.assign({}, add) // так можно удобно сделать копию
clone.d = 20;
console.log(clone);
console.log(add);

///////////////////

// копия массива

const oldArr = ['a', 'b', 'c'];
const newArr = oldArr.slice(); // метод делает копию массива

newArr[1] = 'ahahah';
console.log(newArr);
console.log(oldArr);

/////////////////////

// spread прератор. Оператор разворота

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'telegram']; // ... это и есть spread оператор. Он разворачивает массив по эдементам

console.log(internet);

/////

function log (a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num); // 2, 5, 7

///////

// spread оператор для объекта

const obj = {
    one: 1,
    two: 2
};

const newObj = {...obj};
console.log(newObj);

