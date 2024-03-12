"use strict";

// функции, стрелочные ф-ции (es6)
// function declaration ф-ия создается до начала выполнения скрипта. По этому ее можно вызывать перед объявлением
// function foo(){
// }

let num = 20;

function showFirstMessage(text) { 
    console.log(text);
    let num = 10; // переменная объявленная внутри функции будел локальной и не будет доступна за границами ф-ии. Но можно поменять значение перенной объявленной глобально
    console.log(num); // если переменной num не будет внутри функции, то выведется значение переменной за границами функции, а если переменная есть, то выведется значение переменной внутри функции
}

showFirstMessage("Hello world!"); // когда ф-ия запустится, она возьмет строку которую мы ей передали и подставит вместо аргуметна text и потом засунет в console.log
console.log(num);



function calc(a, b) {
    return (a + b); // на return ф-ия оканчивается. После нет смысла писать какой-либо код
}

console.log(calc(4, 3))
console.log(calc(5, 3))
console.log(calc(12, 5))
console.log(calc(15, 8))



function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


// // function expression создается только тогда, когда доходит поток кода, можно вызывать только после объявления
// // let foo = function(){
// // }

const logger = function(){
    console.log("Hello")
};

logger();

// // Стрелочные ф-ии. Не имеют своего контекста (this)
// // ()=>

const arrow = (a, b) => {
    console.log("Bla bla bla");
    return a + b;
};