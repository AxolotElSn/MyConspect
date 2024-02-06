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

// функции, стреточные ф-ции (es6)
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

// // Строелочные ф-ии. Не имеют своего контекста (this)
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

let a = 5,
    b = a;

b = b + 5;
console.log(a);
console.log(b);

const obj = {
    a: 5,
    b: 1
};

const copy = obj; // передает ссылку( т. е. модифицируем объект)

copy.a = 10;

console.log(copy);
console.log(obj);

function copyFunc (mainObj){ // мы копируем весь старый объект (mainObj) в новый нустой objCopy и возвращаем его
    let objCopy = {};

    for(let key in mainObj){
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copyFunc(numbers);

newNumbers.a = 10;
newNumbers.c.x = 15; // тут мы обратились по ссылке (т. к. в numbers ссылка на вложенный объект "c" по этому объект "c" поменялся) 

console.log(newNumbers);
console.log(numbers);

/////

const add ={
    d: 17,
    e: 20
};

//console.log(Object.assign(numbers, add)); // соединяем объект add и numbers

const clone = Object.assign({}, add); // тут просто получаем копию add
clone.d = 32;

console.log(add);
console.log(clone);

/////

const oldArr = ['a', 'b', 'c'];
const newArr = oldArr.slice(); // копия массива

newArr[1] = 'ahaha38';

console.log(newArr);
console.log(oldArr);

/////
//оператор spread

const video = ['youtube', 'vimeo', 'rutube', 'kinopoisk'],
      blogs = ['wordpress', 'livejournal', 'blogs'],
      internet = [...video, ...blogs, 'vk', 'telega']; // "..." - оператор разворота

console.log(internet);

function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num); // ... - разложила массив на отдельные элементы

//////

const array = ["a", "b", "c"];
const newArray = [...array]; // тут лежит новая копия array (только тут уже spread оператор (оператор разворота))

const q = {
    one: 1,
    two: 2
};

const newQ = {...q}; // ну тоже самое и с объектами
newQ.a = 50;
newQ.b = "hehe21";

console.log(newQ);

//////////////////////////////////////////////////////////////////////////////////////////////////

