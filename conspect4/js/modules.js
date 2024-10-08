'use strict';

const app = '123'; // Получаем ошибку, потому что переменная app уже объевлена. То есть глобальное пространство загрезненно. Какая-то сторонняя библиотека создала переменную которую видно везде

// 1 

const number = 1;

(function(){ // Анонимная самовызывающиеся ф-ия. Анонимная потому что нет названия. А самовызывающиеся потому что мы ее сразу вызываем после объявления. А все это в скобках потому что если их убрать, то мы получим function decloration, а она не может быть анонимной
    let number = 2; // Локальная область видимости. Эта переменная существует только в этой ф-ии
    console.log(number); // 2
    console.log(number + 3) // 5
}());

console.log(number); // 1

// 2

const user = (function(){
        const privat = function() { // Мы не имеем доступа к этой ф-ии т.к. она лежит внутри локальной области видимости
            console.log('I am privat!');
        };

        return { // То есть мы можем использовать те методы, экспортированные из такого объектного интерфейса. Наша анонимная самовызывающиеся ф-ия создает объект и экспортирует только те методы и свойства, которые нам нужны снаружи. Этот объект записывается в user и мы можем обратиться к тем свойствам или методам
            sayHello: privat
        };
}());

user.sayHello(); // I am privat!

