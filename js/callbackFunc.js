"use strict";

// callback - ф-ии это ф-ия, которая должна выполнится после того когда другвя ф-ия завершила свое выполнение

function first(){
    setTimeout(function() {
        console.log(1);
    }, 500); 
}

function second(){
    console.log(2);
}

first();
second();

/////

function learnJS(lang, callback){
    console.log(`Я учу:${lang}`)
    callback();
}

learnJS('JavaScript', function(){
    console.log('I lox')
})