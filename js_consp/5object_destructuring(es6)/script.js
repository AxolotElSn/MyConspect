'use strict';

const options = {
    name: 'test',
    widh: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

// delete options.name;
// console.log(options);

let counter = 0;
for (let key in options) { // цикл отработает столько раз, сколько свойств (key) есть в объекте

    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i}, имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key}, имеет значение ${options[key]}`);
        counter++
    }
}

console.log(counter);

//////////////////////////

const options = {
    name: 'test',
    widh: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest();

// console.log(Object.keys(options)); // Object.keys() делает из объекта новый массив где свойства объекта являются элементами массива
// console.log(Object.keys(options).length); // так можно удобно получить кол-во свойств в объекте
// Но дучше делать так:

const {border, bg} = options.colors; // это и есть деструктуризация 
console.log(border);



