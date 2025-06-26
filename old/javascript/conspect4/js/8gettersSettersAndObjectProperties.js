'use strict';
// свойства кацессоры (геттеры сеттеры). Они позволяют работать с методом как с обычным свойством

const persone = {
    name: 'Alex',
    age: 25,

    get userAge() { // получает значение
        return this.age;
    },

    set userAge(number) { // устонавливает значение
        this.age = number;
    }
};

console.log(persone.userAge); // когда работаем с геттером то не ставим у метода ().
console.log(persone.userAge = 30);

