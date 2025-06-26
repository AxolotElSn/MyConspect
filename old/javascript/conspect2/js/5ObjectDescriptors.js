// Дескрипторы свойств и полезные методы объектов
'use strict';

const ahaha = Symbol('ahaha');

const user = {
    name: 'Alex',
    surname: 'Oelov',
    [ahaha]: "hihi",
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
console.log(Object.getOwnPropertyDescriptor(user, ahaha));
for (let key in user){
    console.log(key);
}


// Object.defineProperty(user, 'name', {writable: false});
// Object.defineProperty(user, 'gender', {value: 'male'}); // если с помощью defineProperty создаем свойства объекта, то все флаги будут false
// console.log(Object.getOwnPropertyDescriptor(user, 'gender'));


Object.defineProperties(user, { // метод позволяющий менять сразу несколько свойств
    name: {writable: false},
    surname: {writable: false}
})

// полезные методы

// Object.preventExtensions() - метод предотвращает любое расширение объекта
// Object.isExtensible() определяет, разрешено ли изменение объекта
// Object.seal() Так же пердотвращает добавление новых свойств в объект, но + еще устанавливает у всех свойств configurable: false. 
// Object.isSealed()
// Object.freeze() Объект невозможно как-либо изменять
// Object.isFrozen()

// Object.is() СОБЕС определяет, являются ли два значения одинаковыми
// Object.keys() возвращает массив из собственных перечесляемых свойств. То есть свойств с enumerable true
// Object.values() возвращает массив значений из собственных перечесляемых свойств. То есть свойств с enumerable true
// Object.entries() возвращает массив с маленькими массивами в которых будут пары ключ - значение



//writable - если true, то свойства в объекте можно изменить, если false, то будет только для чтения
//enumerable - если true , то свойство объекта будет перечисляться в циклах, если false, то циклы его будут игнорировать
// configurable - если true, то свойство можно удалить, а его атрибуты можно изменить, если false, то делать этого нельзя

