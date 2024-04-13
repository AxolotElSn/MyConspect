'use strict';

const user = {
    name: 'Alex',
    surname: 'Oelov',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
}
Object.defineProperty(user, 'birthday', {value: prompt('Date?'), writable: false, enumerable: true, configurable: true});
console.log(Object.getOwnPropertyDescriptor(user, 'birthday')); // так делаем чтоб дату рождения нельзя было поменять



console.log(Object.getOwnPropertyDescriptor(user, 'name')); // так смотрим флаги. В скобках первай аргумент это объект, второй - свойство, флаги которого хотим посмотреть
Object.defineProperty(user, 'name', {writable: false}); // так изменить флаги. Тут тоже самое, третий аргумент - флаги которые меняем. Так же с помощью defineProperty() мы можем создавать новые свойства, если указать такое которого еще нет в объекте
// user.name = 'ahahaha'; // ошибка. Свойство только для чтения



Object.defineProperty(user, 'showMyPublicData', {enumerable: false}); // так делаем если не хотим чотб выводилисб методы
for (let key in user){
    console.log(key);
}



console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));