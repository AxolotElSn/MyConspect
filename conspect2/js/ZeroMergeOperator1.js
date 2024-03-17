// Оператор нулевого слияния

'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    // elem.style.height = `${h || 200}px`; // || 200 это мы ставим значение по умолчанию, если не будет параметра h или будет ложное значение (0, null, NaN, false, undefined)
    // elem.style.width = `${w || 200}px`;
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
    // elem.innerHTML = h ?? 200 * w ?? 200; // 100, вопрос приоритетов операторов. h - правдивое, по этому дальше оператор не идет и выводит 100. По этому надо поставить скобки
    elem.innerHTML = (h ?? 200) * (w ?? 200);
}

changeParams(box, newHeight, newWidth);

let userName;
let userKey;

console.log(userName ?? userKey ?? 'User'); // ?? - оператор нулевого слияния. Работает так же как ИЛИ, но только с null или undefined

// && и ?? не могут работать вместе