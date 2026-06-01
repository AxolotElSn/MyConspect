'use strict';

// вложенные циклы (про обычные решил не писать)

// Задача: при помощи циклов сделать такую фигуру
// *
// **
// ***
// ****
// *****
// ******

let result = '';
const length = 6;

for (let i = 1; i <= length; i++) {

    for(j = 0; j < i; j++) {
        result += '*';
    }

    result += '\n';
}

console.log(result);

///////////////////////////////////////////////////
// метки
// мы поставили метку first это дает то что мы можем пропускать ненужные шаги цикла и указатькуда пойдет дальше цткл 

first: for (let i = 0; i < 3; i++) {
    console.log(`i - level: ${i}`);
    
    for(let j = 0; j < 3; j++) {
        console.log(`j - level: ${j}`);

        for (let k = 0; k < 3; k++) {
            if (k === 2) continue first;
            console.log(`k - level: ${k}`);
        }
    }
}


///////////////////////////////////////////////////
// Задачи

// 1 При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой

const numbers = 20;

for (let i = 0; i < numbers; i++) {
    if (i >= 5 && i <= 10) {
        console.log(i);
    }
}

// 2 При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

const numbers1 = 30;

for (let i = numbers1; i >= 0; i--) {
    if (i <= 20 && i >= 10) {
        if (i === 13) break;
        console.log(i);
    }
}

// 3 При помощи цикла for выведите чётные числа от 2 до 10 включительно

const numbers2 = 10;

for (let i = 1; i <= numbers2; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

// 4 Перепишите цикл  for на вариант с while. Результат должен остаться точно таким же. Не создайте бесконечный цикл! Иначе браузер может зависнуть.
// Цикл, который нужно переписать: for (let i = 2; i <= 16; i++){if (i % 2 === 0){continue; }else { console.log(i); }}

// for (let i = 2; i <= 16; i++){
//     if (i % 2 === 0){
//         continue; 
//     } else { 
//         console.log(i); 
//     }
// }

let i = 2;

while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    }
    else {
        console.log(i)
    }
    i++;
}

// 5 Заполните массив цифрами от 5 до 10 включительно. Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

const arr = [];

for (i = 0; i <= 5; i++) {
    arr[i] = i + 5;
    if (arr[i] === 10) {
        break;
    }
}
console.log(arr);

// 6 Заполните новый массив (result) числами из старого (arr). 
// Количество элементов в массиве можно получить как arr.length, а к элементам обращаемся все так же: arr[0], arr[1] и тд.
// Должен получиться точно такой же массив

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (i = 0; i < arr.length; i++) {
    result[i] = arr[i];
}
console.log(result)

// 7 Измените данный массив так, чтобы все числа были увеличены в 2 раза, а если попадается строка строка - то к ней было добавлено " - done".
// Для определения типа данных используйте typeof();
// Должно получиться: [ 10, 20, 'Shopping - done', 40, 'Homework - done' ]

const data = [5, 10, 'Shopping', 20, 'Homework'];

for (i = 0; i < data.length; i++) {
    if(typeof(data[i]) === 'string') {
        data[i] += '- done';
    } else if (typeof(data[i]) === 'number') {
        data[i] *= 2;
    } 
}

console.log(data);

// 8 Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (i = 1; i <= data.length; i++) {
    result[i - 1] = data[data.length - i];
}
console.log(result);

// 9
//      * 
//     *** 
//    ***** 
//   ******* 
//  ********* 
// ***********


const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)