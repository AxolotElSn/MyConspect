'use strict';

// 1 пример

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this)
//         return a + b;
//     }

//     console.log(sum());
// }

// showThis(4, 5);

// 2 пример

// const object = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//         function shout() {
//             console.log(this); // undefined, потому что это простой вызов ф-ии, не относящийся к методу объекта
//         }
//         shout();
//     }
// };

// object.sum();

// 3 пример

// function User(name, id) { // ф-ия - конструктор по сути мы создали новый объект при помощи this и записывапем туда свойства с new User()
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log("Hello! " + this.name);
//     }
// }

// let alex = new User('Alex', 21); // тут теперь лежит объект (в переменной alex), со свойствами name, id, human, hello
// alex.hello();

// 4 пример

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + " " + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Orlov'); // call передает контекст который надо передать в ф-ию
// sayName.apply(user, ['Orlov']); // делает тоже самое, но передает аргументы в массиве

// function count(num) {
//     return this * num;
// }

// const double = count.bind(2); // bind создает НОВУЮ ф-ию в нашем случае ф-ию double. 2 передается в this, а num в ф-ию double
// console.log(double(3)); // еще раз. 3 передается в num, а this будет = 2 из bind

// 1) Обычная ф-ия: this = window, но если есть use strict, то будет undefind 
// 2) Контекст this у методов объекта - это сам объект. То есть this = самому объекту
// 3) this в конструкторах и классах это новый экземпляр объекта который создается
// 4) Ручная привязка this с помощию call, apply и bind

const btn = document.querySelector('button');

btn.addEventListener('click', function() { // наоборот, если использовать стрелочную ф-ию, то будет ошибка т. к. у стр. ф-ии нет своего контекста и this из-за этого обратится не к btn, а будет undefined
    console.log(this); // получаем элемент на котором произошло событие. То же самое по сути делает event.target (e.target)
    this.style.backgroundColor = 'red';
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => { // стрелочная ф-ия не имеет своего контекста, по этому нет ошибки. Если записать с обычной ф-ией, то будет ошибка
            // console.log(this); // получим объект
            console.log(this.num); // 5
        };

        say();
    }
};

obj.sayNumber();

const double = a =>  a * 2; // можно записать так (return записывается автоматически и аргумент можно записать без скобок, если он один)

console.log(double(4));



