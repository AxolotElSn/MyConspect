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

/////////////////////////////////////////////////////////

const usdCurr = 28,
      eurCurr = 32;

function convert(amount, curr) {
    console.log(curr * amount);
}

convert(500, usdCurr);
convert(500, eurCurr);


/////////////////////////////////

const prise = 28;

const discount = 0.9;

function calcPrise(amount, curr) {
    return curr * amount;
}

function promotion(result) {
    console.log(result * discount)
}

// promotion(calcPrise(500, prise));

const res = calcPrise(500, prise);
promotion(res)

// Задачи
// Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.

function sayHello(name) {
    return `Hello ${name}`;
}

const resultHello = sayHello('Alex')
console.log(resultHello)

// Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: одно на 1 меньше, сам аргумент, и число на 1 больше.

function returnNeighboringNumbers(num) {
    let arr = [num - 1, num, num + 1];
    return arr;
}

const resultArr = returnNeighboringNumbers(5);
console.log(resultArr);

// Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. 
// Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. 
// Функция должна возвращать строку, где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент

function getMathResult(num, count) {

    if (typeof(count) != 'number' || count <= 0) {
        return (num);
    }

    let result = '';

    for(i = 1; i <= count; i++) {
        if(i === count) {
            result += num * i
        } else {
            result += num * i + '---';
        }
    }
    return result;
    
}

const resultMath = getMathResult(3, 10);
console.log(resultMath);
