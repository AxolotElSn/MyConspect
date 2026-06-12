'use strict';

// callback ф-ии позволяют выполнить код в нужной последовательности

function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

///////////

function lernJs(lang, callback) {
    console.log(`I lern: ${lang}`);
    callback()
}

function done() {
    console.log('done')
}

lernJs('js', done) // done - передаем как callback. не пишем скобки потому что мы просто ее передаем как ф-ию. 
// Мы хотим чтоб ф-ия lernJs выполнила ф-ию dobe только тогда когда она до нее дойдет. 
// Она передается как аргумент callback и там уже вызыватся
// То есть скобки не ставим потому что мы не вызываем ф-ию done, а просто ее передаем чтоб она вызвалась когда нужно. В нашем случае в ф-ии lernjs



// lernJs('js', function(){
//     console.log('done')
// })
