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

Promise.race([test(10000), test(1000)]).then(() => { // метод race срабатывает когда сработает 
    console.log('all'); // выполнится если все промисы выполнятся
});