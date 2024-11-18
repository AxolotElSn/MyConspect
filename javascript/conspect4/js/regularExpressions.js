'use strict';

// new RegExp('pattert', 'flags') // классический синтаксис регулярных выражений, которым никто не пользуется
// /pattern/f - более используемый синтаксис

// const ans = prompt('Введите ваше имя');

// const reg = /n/; // ищем n

// flags:
// 1) i - флаг если нам надо найти что-нибудь вне зависимости от регистра
// 2) g - флаг если нам надо найти сразу несколько вхождений
// 3) m - флаг если надо найти в нескольких строках (если есть перенос)

const reg = /n/ig;
// если ничего не находится то null

// console.log(ans.search(reg)); // search - метод строки выполняющий поиск совпадения между регулярным выражением и данной строкой. Этот метод всегда ищет только первое совпадение reg - то самое регулярное выражение

// console.log(ans.match(reg)); // на выходе уже получаем массив на подобие такого ['N', index: 1, input: 'ANNnn', groups: undefined]. index - это то место где был найдено то что мы искали. Или такой ['N', 'N', 'N', 'n', 'n', 'n'], если стоит флаг g

// const pass = prompt('Password?')
// Если в регулярное выражение ставиться . ,то это значит что мы меняем все элементы что есть в строкеыфв
// console.log(pass.replace(/./g, "*")) // replace метод который что-то заменяет. 1 аргумент это то что мы меняем, второй - это на что меняем. То есть тут мы берем все символы что есть в нашем пароле и заменяем их на *. Если нам нужно найти именно точку как символ то перед самой точкой надо поставить \ То есть это должно выглядеть вот так /\./g, "*"

// console.log('12-34-56'.replace(/-/g, ':')); // заменяем все - на :

// ------

const info = prompt('test');
const regular = /e/ig;

// classes
// 1) \d - значит что мы ищем цифры
// 2) \w - ищем все буквы
// 3) \s - ищем все пробелы

const dig = /\d/g;
// console.log(regular.test(info)) // метод возвращает true/false. Если есть совпадения
// console.log(info.match(dig))

const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i)); // более сложный пример. Мы ищем уже по шаблону. Тут шаблон это буква цифра буква цифра ['R2D2', index: 11, input: 'My name is R2D2', groups: undefined]

// ------
// обратные классы

// \D - не числа
// \W - не бкувы
// \S - не пробелы

const str2 = 'My name is R2D2';

console.log(str2.match(/\D/ig));