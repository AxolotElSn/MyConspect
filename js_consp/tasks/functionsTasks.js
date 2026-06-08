'use strict';

//Задачи:
// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба 
// (тоже базовая математика, иногда используется в создании анимаций). Эта функция принимает в себя целое число со значением длины ребра куба.
// Ответ выведите в формате строки, который изображен в примерах.

// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

// 6(a)**2 - площадь; a**3 объем

function calculateVolumeAndArea(a) {

    if (typeof(a) !== 'number' || !a || a < 0) {
         return 'При вычислении произошла ошибка';
    }

    const resultArea = 6 * a ** 2;
    const resultVolume = a ** 3;

    return `Объем куба: ${resultVolume}, Площадь всей поверхности: ${resultArea}`;
}

const result = calculateVolumeAndArea(12);
console.log(result);


// Задача 2:
//Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:

//   1      2       3       4       5       6        7       8       9
//  2.4    6.8    10.12   14.16   18.20   22.24    26.28   30.32   34.36
//  1.3    5.7     9.11   13.15   17.19   21.23    25.27   29.31   33.35

// Функция принимает только целое число от 1 до 36.
// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
// "Ошибка. Проверьте правильность введенного номера места"
// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

function getCoupeNumber (seat) {
    if (typeof(seat) !== 'number' || seat < 0 || !Number.isInteger(seat)) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    }

    if ( seat == 0 || seat > 36) {
        return 'Таких мест в вагоне не существует';
    }

    return Math.ceil(seat / 4);
}

console.log(getCoupeNumber(33));


// Задача 3:

// Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. 
// Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"

function getTimeFromMinutes(minutes) {

    if (typeof(minutes) !== 'number' || minutes < 0 || !Number.isInteger(minutes)) {
        return 'Ошибка, проверьте данные'
    }

    const hour = Math.floor(minutes / 60);
    const remains = minutes - hour * 60;
    const lastDiditHour = hour % 10;
    const lastDigitRemains = minutes % 10;
    let minutesStr = '';

    if (remains == 0 || remains >= 5 && remains <= 20 || remains >= 25) {
        minutesStr = 'минут';
    } else if (lastDigitRemains == 1) {
        minutesStr = 'минута';
    } else if (lastDigitRemains >= 2 && lastDigitRemains <= 4) {
        minutesStr = 'минуты'
    }

    if (lastDiditHour >= 2 && lastDiditHour <= 4) {
        return `${hour} часa ${remains} ${minutesStr}`;
    } else if (hour == 0 || hour >= 5 && hour <= 20) {
        return `${hour} часов ${remains} ${minutesStr}`;
    } else if (lastDiditHour == 1) {
        return `${hour} час ${remains} ${minutesStr}`;
    }

}

console.log(getTimeFromMinutes(150)); // я забыл что через кейсы можно, че я написал. Главное работает

// Задача 4:

// Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. 
// Если один из аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

function findMaxNumber(a, b, c, d) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number' || typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b, c, d);
    }
}

console.log(findMaxNumber(1, 5, 6.6, 10.5)) // 10.5
console.log(findMaxNumber(1, 5, '6', '10')) // 0

// Задача 5:

// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. 
// Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. 
// Причем, их количество должно быть равно переданному аргументу.

// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

function fib(num) {

    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let fib1 = 0;
    let fib2 = 1;

    let result = '';

    for(let i = 0; i < num; i++) {
        if (i + 1 == num) {
            result += `${fib1}` // чтоб не ставить пробел после последнего числа
        } else {
            result += `${fib1} `; 
        }
        let fib3 = fib1 + fib2;
        fib1 = fib2;
        fib2 = fib3;
    }
    return result;
}
console.log(fib(7))


