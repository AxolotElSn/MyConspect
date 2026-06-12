'use strict';

// Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// Имена подставляются автоматически из массива. Если массив пустой, то возвращается сообщение 'Семья пуста'

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {

    let str = '';

    if (arr.length === 0) {
        str = `Семья состоит из: `;
    } else {
        str = 'Семья состоит из: '
    }



    arr.forEach(name => {
        str += `${name} `;
    });

    return str
}

console.log(showFamily(family));

// напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

// standardizeStrings(favoriteCities)  выведет в консоль lisbon rome milan dublin

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let result = '';

    arr.forEach(str => {
        result += `${str.toLowerCase()} `;
    });

    return result;
}

console.log(standardizeStrings(favoriteCities));

// Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

// const someString ='This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'

const someString = 'This is some strange string';

function reverse(str) {

    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

console.log(reverse(someString));


// Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. 
// Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: 
// первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться),
// второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. 
// Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.

const baseCurrencies = ['USD', 'EUR']; 
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) {
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    return str;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'))


