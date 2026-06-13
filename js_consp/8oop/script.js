'use surict';

let str = 'some';
let strObj = new String(str);

console.log(typeof(str)) // string
console.log(typeof(strObj)) // object

console.dir([1, 2, 3]);

const solder = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const john = {
    health: 100
};
// старый метод. Не применять!
// john.__proto__ = solder; // так можно добавить свойства из другого объекта, но только если к ним обратиться напрямую. Но так лучше не делать 
// console.log(john.armor); // 100
// john.sayHello(); // Hello

// Современный поход:
Object.setPrototypeOf(john, solder); // то есть мы делаем так что объект john наследует свойства объекта solder при обращении от john к свойствам solder

console.log(john.armor); // 100
john.sayHello(); // Hello
console.log('---------------------------------');

///////////////////////////////

const solder1 = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const john1 = Object.create(solder1); // правильная и удобная форма записи. Сделали прототипуню связь. Получается объект john унаследует свойства объекта soldrer
john1.sayHello(); // Hello
console.log(john1);



