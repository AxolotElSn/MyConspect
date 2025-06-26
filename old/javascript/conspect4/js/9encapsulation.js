'use strict';

// Геттер и сеттер так называют методы выполняющие ф-ии гетов и сетов
// Инкапсуляция - это когда мы скрываем внутренние детали программы от внешнего мира
// Полиморфизм - это свойство, которое позволяет одно и то же имя использовать для решения двух или более схожих, но технически разных задач
// Наследование - это процесс, посредством которого один объект может приобретать свойства другого. Точнее, объект может наследовать основные свойства другого объекта и добавлять к ним черты, характерные только для него.

function User(name, age) {
    this.name = name;
    // this.age = age;
    let userAge = age;

    this.say = function() {
        console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
    }

    this.getAge = function() {
        return userAge;
    };

    this.setAge = function(age) {
        if (typeof age === 'number' && age > 0 && age < 120) {
            userAge = age;
        } else {
            console.log('Недопустимое значение')
        }
    };
}

const ivan = new User('Ivan', 27);
console.log(ivan.name); // ivan
// console.log(ivan.userAge); // undefined
console.log(ivan.getAge()); // 27

ivan.setAge(30);
ivan.setAge(300); // Недопустимое значение
console.log(ivan.getAge()); // 30
ivan.name = 'Alex';

ivan.say(); // метод показывающий значения в объекте
// Ivan 27 Имя пользователя: Alex, возраст 30. Любой может сейчас вмешаться и поменять значения в объекте (это если все писать через this без геттеров сеттеров)
// Ivan undefined Имя пользователя: Alex, возраст 27. Так будет если вместо this написать переменную. То есть у нас нет доступа к переменной userAge снаружи объекта
// Имя пользователя: Alex, возраст 30 Так уже с геттерами сеттерами. Благодаря ним скрипт стал более безопастным + мы добавили проверки. То есть мы не можем просто так взять возраст из объекта

class User1 {
    constructor(name, age) {
    this.name = name;
    // let userAge = age;
    this._age = age; // _ - значит что свойство должно быть скрыто. Это не синтаксис языка, а бощая договоренность программистов. То есть, если стоит _ значит свойство должно быть скрыто
    }

    #surname = 'Orlov' // можно записать некоторые свойства отдельно от констркутора. Это удобно делать, если нам это свойство менять не нужно
    // # - значит свойство приватное
    say() {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 120) {
            this._age = age;
        } else {
            console.log('Недопустимое значение')
        }
    }
}

const ivan1 = new User1('Alex', 21);
// console.log(ivan1.age); // 27
// ivan1.age = 99; // 
// console.log(ivan1.age); // 99
console.log(ivan1.surname); // undefined

ivan1.say(); // Имя пользователя: Alex Orlov, возраст 21
// Имя пользователя: Ivan, возраст undefined. undefined потому что свойство userAge создается непосредственно в строке метода say. Такого свойства нет. По этому нам в классах нужно работать с this



// дз - нужно написать гет и сет для свойства surname

class HomeWork {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    #surname = '';

    say() {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this.age}`);
    }

    get surname() {
        return this.#surname;
    }

    set surname(surname) {
        if (typeof surname === 'string') {
            this.#surname = surname;
        } else {
            console.log('Недопустимое значение')
        }
    }
}

const home = new HomeWork('Alex', 21);
home.surname = 'Orlov';
home.say();

