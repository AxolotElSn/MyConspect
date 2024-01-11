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

