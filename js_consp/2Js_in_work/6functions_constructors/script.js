// Функции - конструкторы

'use strict';

const num = new Number(3); // new - создание нового экземпляра

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    }
}

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`)
}

const alex = new User('Alex', 23);
const ksenya = new User('Ksy', 24);

alex.exit()

alex.hello();
ksenya.hello();


console.log(alex, ksenya);