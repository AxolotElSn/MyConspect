'use strict';

// promise - Своего рода обещание. Работает так, что если выполнилось что-то, то мы гарантируем что что-то следующее точно будет выполнено
// setTimeout имитирует для примера асинхронную операцию. Типа мы с сервером работаем
// смысл в том что мы избавляемся от callBack ф-ий. И самок главное мы добиваемся того что мы можем передавать даже асинхронный код по цепочке
// console.log('Запрос данных...');

// const req = new Promise(function(resolve, reject) { // аргументы обозначают ф-ии которые мы можем передавать. resolve - что-то выполнилось правильно. reject - обещание не выполнилось, что-то пошло не так
//     setTimeout(() => {
//         console.log('Подготовка данных...');
    
//         const product = {
//             name: 'TV',
//             price: 1500
//         };
    
//         resolve(product); // тут по сути мы вызываем ф-ию положительного исхода. И аргумент перейдет в then()
//     }, 2000);
// });

// req.then((product) => {  // метод выполняющийся на Promise в случае положительного исхода. 
//     return new Promise((resolve, reject) => { // удобно возвращать Promise, потому что можно работать так до бесконечности, то есть сколько бы у нас не было асинхронных операций, и какие глубокие они не были бы, мы каждый раз можем их обработать
//         setTimeout(() => {
//             product.status = 'order'; // новое свойство
//             resolve(product); // product передается в data
//          }, 2000);
//     }).then(data => { // То есть тут мы от return получаем Promise и к нему же используем опять метод then
//         data.modify = true; // еще новое свойство
//         return data;
//     }).then((data) => {
//         console.log(data); // { name: 'TV', price: 1500, status: 'order', modify: true }
//     }).catch(() => { // если произошла ошибка
//         console.error('Произошла ошибка');
//     }).finally(() => { // А это авполнится в любом случае не зависимо от исхода. Можно записать блок кода котрый будет очищать форму
//         console.log('Finally')
//     });
// });


///

const test = time => { // удобно если нужно одну и ту же операцию запускать через определенный промежуток времени
    return new Promise(resolve => { // По сути мы Promise сделали универсальным и просто подставляем данные какие хотим в разных промежутках времени
        setTimeout(() => {
            resolve()
        }, time);
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// Методы:

// Promise.all([test(1000), test(2000)]).then(() => { // метод all принимает в себя массив с промисами. Смысл в том что этот метод ждет когда все промисы выполнятся
//     console.log('all'); // выполнится если все промисы выполнятся
// });

Promise.race([test(5000), test(1000)]).then(() => { // метод race выполняется когда первый (по скорости) промис сработал
    console.log('all');
});


