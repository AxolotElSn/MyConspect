// Замыкание ф-ии и лексическое окружение
// 'use strict';

// let number = 5;

// function logNumber() { // каждый вызов ф-ии это всгда создание нового лексического окружения
//     let number = 4;
//     console.log(number); // 4 равно только внутри ф-ии. Во внутреннем лексическом окружении. Тоесть изначально ф-ия обращается к переменной внутри себя, если она не находит, то обращается к внешнему лексическому окружению
// }

// number = 6;
// logNumber();
// console.log(number) // 6

////////////////////////////////////////////////
// Замыкание — это когда функция «запоминает» переменные из того места, где она была создана, и продолжает иметь к ним доступ даже после того, как внешняя функция завершилась.
function createCounter() { 
    let counter = 0; 

    const myFunction = function() { // const c1 с2 с3 = increment(); это вызов ф-ии myFunction, потому что createCounter возврвщвет самц ф-ию myFunction. Получаетсф что increment - ссылка на myFunction
        counter++; // myFunction запоминает тут counter из мвоего лексического окружения. Поэтому let counter = 0 не обнуляет переменную
        return counter; 
    }
    return myFunction; // Когда ф-ия отрабатывает, окружение остается, и запоминается, пока есть вызовы
}
// createCounter() создала окружение с counter = 0.
// myFunction запомнила это окружение.
// createCounter завершилась, но counter остался жив — потому что на него ссылается myFunction.
// increment теперь имеет личную, приватную переменную counter, к которой больше никто не имеет доступа.

const increment = createCounter(); 
const c1 = increment(); 
const c2 = increment(); 
const c3 = increment(); 

console.log(c1, c2, c3) // 1 2 3

////////////////

{
    let msg = 'Hello'; // Эта переменная доступна только внутри скобок. Тоесть только в своем лексическом окружении
    console.log(msg); // Hello
}
console.log(msg) // Ошибка msg is not defined

/////////////////////////////////

for (let i = 0; i < 9; i++) {
    for(j = 0; j < 9; j++) {
        let num = 3;
        console.log(num);
    }

    console.log(num); // Error num is not defined
}
