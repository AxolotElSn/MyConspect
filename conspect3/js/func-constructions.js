'use strict';

function User(name, id) { // ф-ия конструктор. Еще прикольная информация - в js классов изначально не было
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`)
    }
}

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`)
}

const alex = new User('Alex', 21); // new делает из переменной alex объект с свойствами ф-ии User, которая является конструктором
const ksenya = new User('Ksenya', 22);

alex.exit();
ksenya.exit();

alex.hello();
ksenya.hello();

console.log(alex);
console.log(ksenya);

