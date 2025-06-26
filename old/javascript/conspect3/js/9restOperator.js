'use strict'

const log = function (a, b, ...rest) { // rest... (можно назвать как угодно) говорит о отм что количество аргументов ф-ии может быть любое количество
    console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usage'); // первые 2 выведутся как обычно, остальные выведутся в массиве

function calcOrDouble(number, basis = 2) { // ну а сейчас можно просто значение по умолчанию писать сразу
    // basis = basis || 2; // так делали раньше. То есть если basis не задан, то подставится 2 по умолчанию
    console.log(number * basis);
}


calcOrDouble(3);

//дальше ухожу в практику
