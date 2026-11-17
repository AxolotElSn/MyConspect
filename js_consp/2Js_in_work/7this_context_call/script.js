// контекст вызова this

// 1 Обычная ф-ия: this = window, но если use strict то this = undefined 
// 2 Контекст у методов объектов - сам объект
// 3 this в конструкторах и классах это новый экземпляр объекта. Иначе говоря, создается новый объект в который записываются новые свойства
// 4 ручная привязка this: call, apply и bind

'use strict';

// 1
function showThis(a, b) {
    console.log(this); // Если строго режима нет, то выведет глобальный объект window. Если строгий режим стоит, то выведет undefined
    function sum() {
        console.log(this)
        return a + b;
    }

    console.log(sum());
}
showThis(5, 10);

// 2
const object = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this); // {a: 20, b: 15} Тоесть выводится сам объект в котором лежит метод
    }
};

object.sum();


// 3
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
}

let alex = new User('Alex', 23);


// 4
function sayName(surname) {
    console.log(this); // name: Alex выводим свойство объекта
    console.log(this.name) // Alex
    console.log(this.name + " " + surname); // 
}

const user = {
    name: 'Alex'
}

// call и apply - методы привязывающие ф-ию к объекту и меняющие контекст. Тоесть у обычной ф-ии контекст window или undefined, а при использовании методов, контекстом становится объект к которому привязали ф-ию. Но ВАЖНО, что контекст сохраняется только на конкретный вызов ф-ии на котором используются методы.
// Методы отличаются том что если надо передать аргумент в ф-ию, то call() - просто пишем аргументы через запятую, а apply - в виде массива
sayName.call(user, 'Orlov');
sayName.apply(user, ['Orlov']);


// bind - метод котрорый создает новую ф-ию на основе старой с указанным контекстом
function count(num) {
    return this * num;
}

const double = count.bind(2); // 2 передается в this
console.log(double(3)); // а 3 в аргумент num

///////

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    console.log(this) // получаем саму кнопку
    this.style.backgroundColor = 'red';
});

btn.addEventListener('click', () => {
    console.log(this) // а тут получаем глобальный объект window тк стрелочная ф-ия
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this); // получим объект, тк у стрелочных ф-ий нет своего контекста, а значит она берет контекст у родителя. Родитель ф-ия которая является методом объекта, а контекст методов объекта - сам объект
        };
        say();
    }
}

obj.sayNumber();