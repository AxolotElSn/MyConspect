'use strict';

// function declaration - по сути стандартная ф-ия. Существует в коде еще до момента его исполнения что позволяет вызвать ф-ию до самой ф-ии

const res = calc(5, 10, 20);
console.log(res);

function calc(a, b, c) {
    let result = a + b + c;
    return result;
}


// finction expression. Создается тогда когда доходит поток кода. Можно вызвать только после самой ф-ии. Ф-ия кладется в переменную

const logger = function() {
    console.log("Hello")
};

logger();

// Стрелочная ф-ия. Нет контекста вызова this

const calc = (a, b) => {
    return a + b
};
