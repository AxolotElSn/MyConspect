"use strict";

// замыкание и лексическое окружение

let number = 5; debugger

function logNumber() {
    console.log(number); debugger // 6
}

number = 6;

logNumber(); debugger


function createCounter() {
    let counter = 0;

    const myFunction = function() {
        counter = counter + 1;
        return counter;
    }

    return myFunction;
}

const increment = createCounter(); // по сути мы в increment кладем ф-ию myFunction
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

/////

for (let i = 0; i < 9; i++){
    for(let j = 0; j < 9; j++){
        let num = 3;
    } //СОБЕСЕДОВАНИЕ ВОПРОС:
    console.log(num); // Почему тут мы не можем обратиться к num? Полтому что num существует только внутири фигурных скобок которые от for(j)
}