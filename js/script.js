"use strict";

// let number = 5;
// const leftBirderWidth = 1;
 
// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// }

// obj.a =10;

// console.log (obj);

// {
//     let result = 50; 
// }

///////////////////////////////////////////////////////////////////

// alert('Hello'); // появляется окно с текстом

// const result = confirm("Are u here?"); // появляется окно с выбором ответа (да, отмена)
// console.log(result);

// const answer = prompt("Тебе есть 18 лет?", ""); // появляется окно с вводом ответа (во вторых ковычках мождно написать выриант который уже будет введен), тип данных всегда string, но это можно поменять
// console.log(answer);

// const answers = [];

// answers[0] = prompt("Как ваше имя?", "");
// answers[1] = prompt("Как ваша фамилия?", "");
// answers[2] = prompt("Сколько вам лет?", "");

// console.log(answers);

// const category = "toys";

// console.log(`https://someurl.com/${category}/5`) // интерполяция если использовать `` то можем вписывать части строк без использования +

// const user = "Alex";
// alert(`Hello, ${user}`);

///////////////////////////////////////////////////////////////////////

// console.log('arr' + "-object");
// console.log(4 + +"5"); // плюс перед ковычками делает строку числом

// let incr = 10,
//     decr = 10;

// incr++;
// decr--; //постфиксная запись это когда ставишь ++ после записи, а наоборот префиксная

// console.log(incr, decr);

// console.log(5%2);

// console.log(2*4 === '8'); // === строгое сравнение, сравнивает еще по типу данных

///////////////////////////////////////////////////////////////////////

// if (4 == 9){
//     console.log('ok');
// } else {
//     console.log('error');
// }

// const num = 50;

// if (num < 49){
//     console.log('error');
// }else if (num > 100){
//     console.log('more');
// }else{
//     console.log('ok');
// }

// (num === 50) ? console.log('ok') : console.log('error'); // тернарный оператор если устовие выполняется, то выполняеи 1ое действие, если не верно, то 2ое

// const num = 50;

// switch(num){
//     case 49:
//         console.log('No');
//         break;
//     case 100:
//         console.log('No');
//         break;
//     case 50:
//         console,log('Yes');
//         break;
//     default: // если ни один кейс не прошел, то пройдет default
//         console.log('Не в этот раз');
//         break;
// }


/////////////////////////////////////////////////////////////////////////

// const hamburger = 5;
// const fries = 0;

// if(hamburger && fries) {
//     console.log('я сыт');
// }

//console.log((hamburger && fries)); // результат логических операций это булевое значение

// const hamburger = 3;
// const fries = 1;
// const cola = 0;
// const nuggets = 2;
// // оператор и выводит первое ложное значение в консоль, если такого нет, то просто последнее записанное занченте
// // оператор или выводит первое истинное выражение, а так же у или ниже приоритет выполнения (сначала выполняется и, а потом или)
// if(hamburger === 3 && cola ===2 || fries === 3 && nuggets ) {
//     console.log('все сыты');
// } else {
//     console.log('мы уходим');
// }

// let johnReport, alexReport, samReport, mariaReport = 'done';

// console.log(johnReport || alexReport || samReport || mariaReport);

/////////////////////////////////////////////////////////////////////////////

//let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while(num < 55);

//for (let i = 1; i < 10; i++){
//    if (i===6){
//        continue; // пропускает нужный шаг, но не выкидывает из цикла
//    }
//    console.log(i);
//}

///////////////////////////////////////////////

// for (let i = 0; i < 3; i++){
//     console.log(i);
//     for(let j = 0; j < 3; j++){
//         console.log(j);
//     }
// }

// *
// **
// ***
// ****
// *****
// ******

// let result = ''
// const length = 7;

// for (let i = 1; i < length; i++){

//     for (let j = 0; j < i; j++){
//         result += "*";
//     }
//     result += '\n';
// }

// console.log(result);


//////////////////////////////////////////////////////

// first: for (let i = 1; i < 3; i++){ // first это метка, можно использовать любое стово. потом можно вернуться к нужному циклу по этой метке+
//     console.log(`first level: ${i}`);
//     for (let j = 0; j < 3; j++){
//         console.log(`second level: ${j}`);
//         for (let k = 0; k < 3; k++){
//             if (k === 2) continue first;
//             console.log(`fird level: ${k}`);
//         }
//     }
// }
//  $ используется в строковых литералах с обратными кавычками (``) для создания строк с вставками переменных, которые будут вычислены и вставлены в строку. Это называется шаблонной строкой (template string) в JavaScript.
/////////////////////////////////////////////////////////////////////

// const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i; // arrayOfNumbers[i - 5] = i; - На каждой итерации цикла значение переменной i присваивается элементу массива arrayOfNumbers с индексом (i - 5). Например, при i равном 5, элементу с индексом 0 присваивается значение 5. При i равном 6, элементу с индексом 1 присваивается значение 6, и так далее.
//     }

//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;

///////////////////////////////////////////////////////////////////////


// const data = [5, 10, 'Shopping', 20, 'Homework'];

// // Пишем решение вот тут

// for(let i = 0; i < data.length; i++){
//     if(typeof(data[i]) === 'string'){
//         data[i] = `${data[i]} - done`;
//     } else if(typeof(data[i] === 'number')) {
//         data[i] *= 2;
//     }
// }

// console.log(data); // [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

////////////////////////////////////////////////////////////////////////

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i = 1; i <= data.length; i++) {
//     result[i - 1] = data[data.length - i]
// }

// console.log(result); // [ 'Homework', 20, 'Shopping', 10, 5 ]

///////////////////////////////////////////////////////////////

//      *
//     ***
//    *****
//   *******
//  *********
// ***********

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result) 

/////////////////////////////////////////////////////////////////////

// функции, стрелочные ф-ции (es6)
// function declaration ф-ия создается до начала выполнения скрипта. По этому ее можно вызывать перед объявлением
// function foo(){
// }

// let num = 20;

// function showFirstMessage(text) { 
//     console.log(text);
//     let num = 10; // переменная объявленная внутри функции будел локальной и не будет доступна за границами ф-ии. Но можно поменять значение перенной объявленной глобально
//     console.log(num); // если переменной num не будет внутри функции, то выведется значение переменной за границами функции, а если переменная есть, то выведется значение переменной внутри функции
// }

// showFirstMessage("Hello world!"); // когда ф-ия запустится, она возьмет строку которую мы ей передали и подставит вместо аргуметна text и потом засунет в console.log
// console.log(num);



// function calc(a, b) {
//     return (a + b); // на return ф-ия оканчивается. После нет смысла писать какой-либо код
// }

// console.log(calc(4, 3))
// console.log(calc(5, 3))
// console.log(calc(12, 5))
// console.log(calc(15, 8))



// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);


// // function expression создается только тогда, когда доходит поток кода, можно вызывать только после объявления
// // let foo = function(){
// // }

// const logger = function(){
//     console.log("Hello")
// };

// logger();

// // Стрелочные ф-ии. Не имеют своего контекста (this)
// // ()=>

// const arrow = (a, b) => {
//     console.log("Bla bla bla");
//     return a + b;
// };

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// важно делать ф-ии универсальными

// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.9;

// function convert (amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// // convert(500, usdCurr);
// // convert(500, eurCurr);

// const resUsd = convert(500, usdCurr); // получается 500 = amount, а usdCurr и eurCurr = curr
// const resEur = convert(500, eurCurr);
// promotion(resUsd);
// promotion(resEur);



// function test() {
//     for(let i = 0; i < 5; i++) {
//         console.log(i);
//         if(i === 3) return; // return полностью выкидывает из ф-ии, а ф-ия будет возвращать undefind. ф-ия ВСЕГДА что-то возвращает
//     }
//     console.log('Done');
// }

// test();

// function doNothing() {};
// console.log(doNothing() === undefined); // true

//Вопрос на собеседовании
// функция не содержащая return будет возвращать undefing. console.log console - это объект, а .log это его метод т.е. ф-ия записанная внутри объекта. По этому console.log возвращает undefined

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// методы и свойства строк и чисел

// const str = "test";
// const arr = [1, 2, 3];

// console.log(str[2]); // s

// console.log(str.toUpperCase()); // TEST

// console.log(str.toLowerCase()); // test селает нижний регистр

// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit")); // 5 ищет строку

// const logg = "Hello world!";

// console.log(logg.slice(6, 11)); // world

// console.log(logg.substring(6, 11)); // world

// console.log(logg.substr(6, 5)); // тут мы начинаем с 6 ого символа и вырезаем 5 символов

// console.log(arr.length);

// const num = 12.2;
// console.log(Math.round(num)); // 12 округление

// const test = "12.2px";
// console.log(parseInt(test)) // превращает в другую систему счисления
// console.log(parseFloat(test)); 12.2 // возвращает в 10ой системе счисления

//////////////////////////////////////////////////////////////////////////////////////////////////////
//метод trim

//(строка).trim

//////////////////////////////////////////////////////////////////////////////////////////////////////
//callback - ф-ии это ф-ия, которая должна выполнится после того когда другвя ф-ия завершила свое выполнение

// function first(){
//     setTimeout(function() {
//         console.log(1);
//     }, 500); 
// }

// function second(){
//     console.log(2);
// }

// first();
// second();

// /////

// function learnJS(lang, callback){
//     console.log(`Я учу:${lang}`)
//     callback();
// }

// learnJS('JavaScript', function(){
//     console.log('I lox')
// })

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Объекты, деструктуризация объектов

// const options = {
//     name: 'boroda',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() { // можно делать свои методы в объектах
//         console.log("Test");
//     }
// }

// options.makeTest();

// const {border, bg} = options.colors; // такая структура называется деструктуризацией (на будущее пригодится)
// console.log(border);

// console.log(options.name);

// delete options.name;

// console.log(options);

// for (let key in options) {
//     if(typeof(options[key]) === 'object'){
//         for (let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`)
//     }
// }
// console.log(options["colors"] ["border"]);


// let counter = 0; // типа счетчик (чтобы узнать сколько свойств в объекте)
// for(let key in options){
//     counter++;
// }
// console.log(counter);

// console.log(Object.keys(options).length) // ну или более простой вариант метод Object.keys()

//////////////////////////////////////////////////////////////////////////////////////
//массивы и псевдомассивы

// const arr = [1, 62, 43, 4, 15, 6, 8];
// //arr[99] = 0;
// // console.log(arr.length); // СОБЕСЕДОВАНИЕ: свойство length состоит из ПОСЛЕДНЕГО индекса который есть в массиве + 1. Если сдетать так как в 470-471 строке то вывод будет [ 1, 2, 3, 4, 5, 6, 8, <92 empty items>, 0 ], а это нарушение логики! ТАК НИКОГДА НЕ ДЕЛАТЬ
// // console.log(arr);


// arr.sort(compareNum); // использует алгоритм быстрой сортировки
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }


// arr.forEach(function(item, i, arr) { // более гибкий вариант перебора массива (можно круче настроить). forEach проходит по каждому элементу массива и применяет callback функцию к каждому элементу. Ф-ия может в себя принимать 3 аргумента: 1) тот элемент который мы перебтраем на данный момент (назвать можно как угодно. В моем случае item). 2) номер по порядку, индекс элемента, проще говоря. 3) ссылка на массив который перебираем
//     console.log(`${i}: ${item} врутри массива ${arr}`);
// })

// // arr.pop(); // этот метод удаляеи последний элемент массива
// // arr.push(10)// этот метод наоборот добавляет элемент 
// // console.log(arr);

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
// console.log(" ");
// for (let value of arr){ //for of работает только с массивоподобными объектами. Если написать for in то выведет индексы, а не значения. Обычно используют метод forEach, но если нужно использовать break/continue, то придется делать через for
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(", "); // превращает строку в массив. ", " - разделитель
// products.sort(); // сортирует массив. Если массив из строчный элементов, то он отсортирует по алфавиту. Если массив из чисел, то надо писать ф-ию
// console.log(products.join("; ")); // join наоборот превращает массив в строку "; " - разделитель

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Передача данных по ссылке или по значению

// let a = 5,
//     b = a;

// b = b + 5;
// console.log(a);
// console.log(b);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // передает ссылку( т. е. модифицируем объект)

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copyFunc (mainObj){ // мы копируем весь старый объект (mainObj) в новый нустой objCopy и возвращаем его
//     let objCopy = {};

//     for(let key in mainObj){
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copyFunc(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 15; // тут мы обратились по ссылке (т. к. в numbers ссылка на вложенный объект "c" по этому объект "c" поменялся) 

// console.log(newNumbers);
// console.log(numbers);

// /////

// const add ={
//     d: 17,
//     e: 20
// };

// //console.log(Object.assign(numbers, add)); // соединяем объект add и numbers

// const clone = Object.assign({}, add); // тут просто получаем копию add
// clone.d = 32;

// console.log(add);
// console.log(clone);

// /////

// const oldArr = ['a', 'b', 'c'];
// const newArr = oldArr.slice(); // копия массива

// newArr[1] = 'ahaha38';

// console.log(newArr);
// console.log(oldArr);

// /////
// //оператор spread

// const video = ['youtube', 'vimeo', 'rutube', 'kinopoisk'],
//       blogs = ['wordpress', 'livejournal', 'blogs'],
//       internet = [...video, ...blogs, 'vk', 'telega']; // "..." - оператор разворота

// console.log(internet);

// function log(a, b, c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num); // ... - разложила массив на отдельные элементы

// //////

// const array = ["a", "b", "c"];
// const newArray = [...array]; // тут лежит новая копия array (только тут уже spread оператор (оператор разворота))

// const q = {
//     one: 1,
//     two: 2
// };

// const newQ = {...q}; // ну тоже самое и с объектами
// newQ.a = 50;
// newQ.b = "hehe21";

// console.log(newQ);

//////////////////////////////////////////////////////////////////////////////////////////////////
// задание

// Задачи:

// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

// 2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

// Пример:

// standardizeStrings(favoriteCities)  выведет в консоль

// lisbon
// rome
// milan
// dublin

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = '';

//     arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

//     arr.forEach(member => {
//         str += `${member} `
//     });
//     console.log(str);
//     return str;
// }

// showFamily(family);

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(city => {
//         console.log(city.toLowerCase())
//     })
// }

// standardizeStrings(favoriteCities);

// 3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

// Пример:

// const someString = 'This is some strange string';
// reverse(someString) => 'gnirts egnarts emos si sihT'

// Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"

// Это очень интересная задача, которую можно решить несколькими способами. Её дают для того, чтобы оценить навыки и знания программиста, посмотреть как он думает. Как небольшая подсказка, есть метод, который может вам помочь. И часть дополнительных вариантов решения мы тоже изучим в течении курса.

// Может показать сложной с первого взгляда, но это совсем не так 🙂

// 4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.

// Пример:

// availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')
// Вернет строку:

// Доступные валюты:
// UAH
// RUB
// Заметьте:

// - CNY (юань) исчез из списка валют, значит такая валюта закончилась

// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов

// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof(str) !== 'string') {
//         return "Ошибка!";
//     }
//     // Самый оптимальный вариант решения
//     console.log(str.split('').reverse('').join(''));
    
//     return str;

//     // Решение при помощи цикла
//     // let newStr = '';
//     // for (let i = str.length - 1; i >= 0; i--) {
//     //     newStr += str[i];
//     // }
//     // return newStr
// }

// reverse(someString);

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str = '';
//     arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

//     arr.forEach(function(curr, i) {
//         if (curr !== missingCurr) {
//             str += `${curr}\n`;
//         }
//     });

//     // Или
//     // for (let i = 0; i < arr.length; i++) {
//     //     if (arr[i] === missingCurr) {
//     //         continue;
//     //     }
//     //     str += `${arr[i]}\n`;
//     // }

//     return str;
// }

// availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')

//////////

// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

// Пример:

// showExperience(personalPlanPeter) => '1 month'

// P.S. желательно использовать деструктуризацию, но не обязательно

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

// Пример:

// showProgrammingLangs(personalPlanPeter)  =>

// "Язык js изучен на 20% Язык php изучен на 10%"

// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

// P.S. Для переноса строки используется \n в конце строки.

// 3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

// Пример:

// personalPlanPeter.showAgeAndLangs(personalPlanPeter)
// => 'Мне 29 и я владею языками: RU ENG'

// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof(str) !== 'string') {
//         return "Ошибка!";
//     }
//     // Самый оптимальный вариант решения
//     return str.split('').reverse().join('');

//     // Решение при помощи цикла
//     // let newStr = '';
//     // for (let i = str.length - 1; i >= 0; i--) {
//     //     newStr += str[i];
//     // }
//     // return newStr
// }

// reverse(someString);

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str = '';
//     arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

//     arr.forEach(function(curr, i) {
//         if (curr !== missingCurr) {
//             str += `${curr}\n`;
//         }
//     });

//     // Или
//     // for (let i = 0; i < arr.length; i++) {
//     //     if (arr[i] === missingCurr) {
//     //         continue;
//     //     }
//     //     str += `${arr[i]}\n`;
//     // }

//     return str;
// }

// availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')

///////////////////////////////////////////////////////////////////////////////////////////////
// Основы ООП, прототипно-ориентированное наследование

// let str = "some";
// let strObj = new String(str);

// // console.log(strObj);

// // console.log(typeof(str)); // string
// // console.log(typeof(strObj)); // object

// console.dir([1,2,3]);

// const solder = {
//     health: 400,
//     armor: 100,
//     sayHello: function(){
//         console.log("Hello");
//     }
// };

// const john = Object.create(solder); // делает объект john наследником объекта solder

// // const john = {
// //     health: 100
// // };

// //john.__proto__ = solder; // объект john наследует данные из solder. Данный метод устаревший

// Object.setPrototypeOf(john, solder) // тоже самое, так и надо писать

// console.log(john.armor);
// john.sayHello();

//////////////////////////////////////////////////////////////////////////////////////////////////////////
// практика

// Задача:

// У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.

// Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'. И все 🙂

// Но эта задача содержит несколько подзадач внутри:

// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;

// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;

// - определение того, хватает ли бюджета на оплату такого объема;

// - все числа идут без единиц измерения для упрощения, просто цифры и все;

// - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000,
//     isBudgetEnough: function(data) {
//         let storeArea = 0;
//         let volume = 0;

//         data.shops.forEach(shop => {
//             storeArea += shop.width * shop.length;
//         });

//         volume = data.height * storeArea;

//         if(data.budget - (volume * data.moneyPer1m3) >= 0){
//             return 'Бюджета достаточно';
//         } else {
//             return 'Бюджета недостаточно';
//         }
//     }
// }
// shoppingMallData.isBudgetEnough(shoppingMallData);
// console.log(shoppingMallData.isBudgetEnough(shoppingMallData));

///////////////////////////////////////////////////////////////////////////////////
//точки останова и консоль разработчика

// const arr = [1, 14, 4, 30, 54]
//       sorted = arr.sort(compareNum);

// function compareNum(a, b){ // нужно для правильной сортивовки. Т. к. метод sort() сортирует как строки, а не числа
//     return a - b; // Когда вы передаете функцию в метод sort() массива, она используется для определения порядка сортировки элементов массива. В случае, когда вы используете функцию сравнения вида return a - b, это говорит методу sort(), чтобы сравнивать элементы массива как числа
// }

// console.log(sorted);

/////////////////////////////////////////////////////////////////////////////////////////
// динамическая типизация

// // To string

// // 1)

// console.log(typeof(String(null)));

// // 2) конкатенация - сложение строки с чем-то. В нашем случае с числом

// console.log(typeof(5 + '')); // при сложении со строкой мы всегда получаем строку

// const num = 5;
// console.log("https://vk.com/catalog/" + num); // пример

// const fontSize = 26 + 'px'; // пример

// // To number

// //1)

// console.log(typeof(Number('4')));

// // 2)

// console.log(typeof(+'5'));

// // 3)

// console.log(typeof(parseInt("15px", 10))) // 10 это 10чная система счисления


// let answ = +prompt("Hello", "")

// // To boolean

// // 1)

// // 0, '', null, undefined, NaN; - это все false

// let switcher = null;

// if (switcher){
//     console.log('Working...'); // не выполнится
// }

// switcher = 1;

// if (switcher){
//     console.log('Working...'); // выполнится т. к. switcher не null
// }

// // 2)

// console.log(typeof(Boolean('4')));

// // 3)

// console.log(typeof(!!"3142132")); // - boolean

//////////////////////////////////////////////////////////////////////////////////////
// замыкание и лексическое окружение

// let number = 5; debugger

// function logNumber() {
//     console.log(number); debugger // 6
// }

// number = 6;

// logNumber(); debugger


// function createCounter() {
//     let counter = 0;

//     const myFunction = function() {
//         counter = counter + 1;
//         return counter;
//     }

//     return myFunction;
// }

// const increment = createCounter(); // по сути мы в increment кладем ф-ию myFunction
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1, c2, c3);

// /////

// for (let i = 0; i < 9; i++){
//     for(let j = 0; j < 9; j++){
//         let num = 3;
//     } //СОБЕСЕДОВАНИЕ ВОПРОС:
//     console.log(num); // Почему тут мы не можем обратиться к num? Полтому что num существует только внутири фигурных скобок которые от for(j)
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// это тест

// NaN - number

// function foo(a,b) {
//     const [first] = a;
//     const {eng} = b;
 
//     console.log(a);

//     return `${first} ${eng}`;
// }

// const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'})
// console.log(result);


// let time = '';
// 5 > 3 || 2 ? time = 'Day' : time = 'Night' 
// console.log(time); // Day



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//задачи с собесов

// что выведет?
// let x = 5;
// alert(x++); // 5 такая запись сначала вернет 5, а потом уже ее увеличит на +1. Чтобы вывело 6, надо записать ++x

// //чему равно такое выражение?

// [] + false - null + true;
// console.log([] + false); // false
// console.log([] + false - null); // NaN т. к. null это тип данных - число
// console.log([] + false - null + true); // NaN

// что выведет код?

// let y = 1;
// let x = y = 2;
// alert(x); // 2

// чему равна сумма?

// [] + 1 + 2;
// console.log([] + 1 + 2); // 12 т. к. пустой массив превращается в пустую строку, а потом прибавляется 1 и 2. Чтобы было 3, надо поставить +

// Что выведет код?

// alert("8523"[0]); // 8 тут мы обращаемся к 1ому элементу строки

// Чему равно?

// console.log(2 && 1 && null && 0 && undefined); // null. Когда оператор и встречает false, далбше он не идет. Тут оператор после 1 встретил null - это false. Дальше он не пошел и вывел null

// есть ли азница между этими выражениями

// console.log(!!(1 && 2)); // true !! - превращают в будиновое значение
// // и 
// console.log((1 && 2)); // 2

// что выведет код?

// alert(null || 2 && 3 || 4); // 3 и выполняется первее чем или. 2 и 3 это 3 - true. null - false. false или 3(true) получается true. Оператор или останавливается на true. С 4 также. 3 или 4, 4 это true По этому выводит 3

// правла ли что a == b?

// const a = [1, 2, 3];
// const b = [1, 2, 3];

// console.log(a == b); // false потому что это разные массивы. Не важно что содеожимое одинаковое

//что выведет код?

// alert(+"Infinity"); // Infinity просто тип данных число

// верно ли сравнение?

// console.log("Ёжик" > "яблоко"); // false т. к. особенности юникода. просто надо посмотреть номер символа :D

// чему равно

// console.log(0 || "" || 2 || undefined || true || false); // 2

/////////////////////////////////////////////////////////////////////////////////////////////////////
//получение элементов со страницы

// const box = document.getElementById('box'); // обращаемся к элементу по id

// console.log(box); // <div class="box" id="box"></div>

// // const btns = document.getElementsByTagName('button');
// // console.log(btns); // получаем псевдомассив

// // const btns = document.getElementsByTagName('button')[1]; // получаем 2ую кнопку
// // console.log(btns);

// const btns = document.getElementsByTagName('button'); // обращаемся к элементу по тегу
// console.log(btns[1]); // получаем 2ую кнопку. просто другой вариант записи :3

// const circles = document.getElementsByClassName('circle'); // обращаемся к элементу по классу
// console.log(circles); // так же получаем html-коллекцию. Ну псевдомассив короче :D

// const hearts = document.querySelectorAll('.heart'); // тут мы обращаемся по css селектору. А так же тут можно использовать forEach()
// console.log(hearts);
//  hearts.forEach(item => {
//     console.log(item);
//  });

//  const oneHeart = document.querySelector('.heart'); // получает один элемент со страницы. Точнее первый элемент
//  console.log(oneHeart);

 ////////////////////////////////////////////////////////////////////////////////////////////////////
 //действие с элементами

// const box = document.getElementById('box'),
//       btns = document.getElementsByTagName('button'),
//       circles = document.getElementsByClassName('circle'),
//       wrapper = document.querySelector('.wrapper'),
//       hearts = wrapper.querySelectorAll('.heart'),
//       oneHeart = wrapper.querySelector('.heart');

// // box.style.backgroundColor = 'green';
// // box.style.width = '500px';

// box.style.cssText = 'background-Color: green; width: 500px'

// btns[1].style.borderRadius = '100%';
// circles[0].style.backgroundColor = 'red';


// // for (let i = 0; i < hearts.length; i++){
// //     hearts[i].style.backgroundColor = 'brown';
// // }

// hearts.forEach(item => {
//     item.style.backgroundColor = 'brown';
// });

// const div = document.createElement('div'); // создание элемента. Но он существует только внутри файла js
// // const text = document.createTextNode('Тут был я');

// div.classList.add('black'); // добавляем класс 

// wrapper.append(div); // тут уже элемент прописывается на странице благодаря методу append()
// // document.querySelector('.wrapper').append(div); // так можно прописывать элементы внутри родителей
// // wrapper.appendChild(div); // устаревшая запись

// // wrapper.prepend(div); // этот метод вставляет в начало элемент

// // hearts[0].before(div); до [] элемента
// // hearts[0].after(div); // после [] элемента

// // wrapper.insertBefore(div, hearts[1]); // тоже устаревшая запись. В скобках первый аргумент- то что вставляем, второй перед каким элементом вставляем

// // circles[0].remove(); // удаление элемента
// // wrapper.removeChild(hearts[1]); // тоже устаревшая запись

// hearts[0].replaceWith(circles[0]); // заменили первое сердечко первым кружочком
// // wrapper.replaceChild(circles[0], hearts[0]); // да еще одна устаревшая запись :D

// // div.innerHTML = "<h1>Hello World</h1>"; // можно вставлять html - структуры, ну или просто текст

// // div.textContent = "Hello"; // в этот метод html - структура не войдет. Только текст (это еще вопрос безопасности)


// div.innerHTML = "<h1>Hello World</h1>";
// //этот метод вставляет кусочек html - кода перед или после тегов
// div.insertAdjacentHTML('beforebegin', '<h2>Hello1</h2>') //beforebegin вставляет html - код перед элементом
// div.insertAdjacentHTML('afterbegin', '<h2>Hello2</h2>') // afterbegin вставляет html - код в начало 
// div.insertAdjacentHTML('beforeend', '<h2>Hello3</h2>') // beforeend вставляет html - код преред концом
// div.insertAdjacentHTML('afterend', '<h2>Hello4</h2>') // afterend вставляет html - код после 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 