'use strict';

// методы строк
const str = 'test'

console.log(str.toLocaleUpperCase()); // TEST Метод не меняет началбную строку, а возвращает просто новое значение
console.log(str);



const fruit = 'Some fruit';

console.log(fruit.indexOf("fruit")); // 5 Метод ищет на каком месте стоит то что ты ищем. Если ищем то чего нетЮ то вернет -1



const logg = "Hello world!";

console.log(logg.slice(6, 12)); // world! Метод отрезает тот диапазон который мы укажем. Если указать только пераый аргумент, то все остальное вырежется

console.log(logg.substr(6, 6)); // Похожий метод, только второй аргумент указывает сколько символов нужно вырезать

/////////////////

// методы чисел
// для чисел есть отдельная библиотека Math

const num = 12.5;
console.log(Math.round(num)) // 12 Math.round округляет число до ближайшего целого

const test = "12.2px";

console.log(parseInt(test)); // 12 Метод возвращает число, даже если изначально была строка. Все что не число в строке отрезается

console.log(parseFloat(test)); // 12.2 Метод возврвщвет тоже самое только с дробями
