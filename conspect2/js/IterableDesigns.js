// Итерируемые конструкции

// Итерируемые объекты - это объекты которые могут быть перебраны с помощью for of. То есть те что содержат symbol iterator

'use strict';

const user = {
    name: 'Alex',
    surname: 'Orlov',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}

// for (const key of user) { // ошибка user is not iterable. Потому что мы не можем перебрать объект через for of
//     console.log(user[key]);
// }

const arr = ['b', 'a', 'c']
Array.prototype.someMethod = function() {}; // просто пустой метод. Бесполезный 

console.dir(arr);

for (const key in arr) { // for in выведет новый метод, а for of нет
    console.log(key);
}

const salaries = {
    john: 500,
    ivan: 1000,
    ann: 5000,
    sayHello: function() {
        console.log('Hello');
    }
}
// нам нужно добавить в объект метод с именем symbol iterator чтоб мы могли его перебрать с помощью for of
// когда цикл for of будет запускаться на объекте salaries то он вызывает метод salaries[Symbol.iterator] один раз. Этот метод должен нам вернуть итератор - это объект с методом next(). Дальше for of будет работать с этим методом
salaries[Symbol.iterator] = function() {
    return {
        current: this.john,
        last: this.ann,
        next() {
            if(this.current < this.last) {
                this.current += 500;
                return{done: false, value: this.current}
            } else {
                return {done: true}
            }

            // {done: true, value: 123}
        }
    }
}

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());

// for (let res of salaries) {
//     console.log(res);
// }

// for (const key in arr) { // получаем ключ
//     console.log(arr[key]);
// }

// const arr2 = ['b', 'a', 'c']

// for (const key of arr) { // получаем значение
//     console.log(key);
// }

// const str = 'string'

// for (const key in str) {
//     console.log(str[key]);
// }

