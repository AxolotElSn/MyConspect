"use strict";

// Объекты, деструктуризация объектов

const options = {
    name: 'boroda',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() { // можно делать свои методы в объектах
        console.log("Test");
    }
}

options.makeTest();

const {border, bg} = options.colors; // такая структура называется деструктуризацией (на будущее пригодится)
console.log(border);

console.log(options.name);

delete options.name;

console.log(options);

for (let key in options) {
    if(typeof(options[key]) === 'object'){
        for (let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`)
    }
}
console.log(options["colors"] ["border"]);


let counter = 0; // типа счетчик (чтобы узнать сколько свойств в объекте)
for(let key in options){
    counter++;
}
console.log(counter);

console.log(Object.keys(options).length) // ну или более простой вариант метод Object.keys()
