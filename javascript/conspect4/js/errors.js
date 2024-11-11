'use strict';
// Ошибки и как избежать поломки кода

// try { // Сначала выполняется код в блоке try, если он выполнится не может, то выполнится блок catch
//     console.log('Normal'); // normal
//     console.log(a); // ошибка
//     console.log('result'); // все, дальше не идет, а перепрыгивает сразу на catch
// } catch(e) { // e - объект ошибки (может записыватся как угодно)
//     // console.log(e); // в объект записывается та ошибка которую мы получити в try
//     console.log(e.name); // ReferenceError
//     console.log(e.message); // a is not defined
//     console.log(e.stack); // ReferenceError: a is not defined at errors.js:6:17
// } finally { // тут код выполнится в любом случае, не зависимо от try и catch

// }

// console.log('Still normal'); // Still normal. плюс этого метода, что код будет дальше выполняться, даже если будет ошибка

// Проблема в том что может быть несколько html файлов. И если один и тот же скрипт применяется на нескольких html файлах, то мы получим ошибку в консоли в том файле к которому наш обработчик не имеет отношения (обработчик как приер)
// Тут поможет нам try catch
try {
    document.querySelector('.active').addEventListener('click', () => {
        console.log('click');
    });
} catch(e) {
    console.log(e)
}
 
console.log('Normal')

