'use strict';

// function* generator() { // ф-ия генератор работает так что при каждом ее вызове она будет возвращать следующий шаг
//     yield 'S';
//     yield 'c';
//     yield 'r';
//     yield 'i';
//     yield 'p';
//     yield 't';
// };

// const str = generator();

// console.log(str.next()); // { value: 'S', done: false }
// console.log(str.next()); // { value: 'c', done: false }
// console.log(str.next()); // { value: 'r', done: false }
// console.log(str.next()); // { value: 'i', done: false }
// console.log(str.next()); //{ value: 'p', done: false }
// console.log(str.next()); // { value: 't', done: false }
// console.log(str.next()); // { value: undefined, done: true }

function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

for (let k of count(7)) { // можно перебрать через for of
    console.log(k);
}

// const counter = count(7);

// console.log(counter.next()); // { value: 0, done: false }
// console.log(counter.next()); // { value: 1, done: false }
// console.log(counter.next()); // { value: 2, done: false }

