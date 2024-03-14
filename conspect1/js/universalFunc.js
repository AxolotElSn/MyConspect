"use strict";

// важно делать ф-ии универсальными

const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert (amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

// convert(500, usdCurr);
// convert(500, eurCurr);

const resUsd = convert(500, usdCurr); // получается 500 = amount, а usdCurr и eurCurr = curr
const resEur = convert(500, eurCurr);
promotion(resUsd);
promotion(resEur);



function test() {
    for(let i = 0; i < 5; i++) {
        console.log(i);
        if(i === 3) return; // return полностью выкидывает из ф-ии, а ф-ия будет возвращать undefind. ф-ия ВСЕГДА что-то возвращает
    }
    console.log('Done');
}

test();

function doNothing() {};
console.log(doNothing() === undefined); // true

//Вопрос на собеседовании
// функция не содержащая return будет возвращать undefing. console.log console - это объект, а .log это его метод т.е. ф-ия записанная внутри объекта. По этому console.log возвращает undefined

