"use strict";

// let number = 5;
// const leftBirderWidth = 1;
 
// number = 10;
// console.log(number);

// const obj = {
//     a: 50
// }

// obj.a =10;

// console.log (obj);

// {
//     let result = 50; 
// }

// alert('Hello'); // появляется окно с текстом

// const result = confirm("Are u here?"); // появляется окно с выбором ответа (да, отмена)
// console.log(result);

// const answer = prompt("Тебе есть 18 лет?", ""); // появляется окно с вводом ответа (во вторых ковычках мождно написать выриант который уже будет введен), тип данных всегда string, но это можно поменять
// console.log(answer);

// const answers = [];

// answers[0] = prompt("Как ваше имя?", "");
// answers[1] = prompt("Как ваша фамилия?", "");
// answers[2] = prompt("Сколько вам лет?", "");

// console.log(answers);

// const category = "toys";

// console.log(`https://someurl.com/${category}/5`) // интерполяция если использовать `` то можем вписывать части строк без использования +

// const user = "Alex";
// alert(`Hello, ${user}`);



// console.log('arr' + "-object");
// console.log(4 + +"5"); // плюс перед ковычками делает строку числом

let incr = 10,
    decr = 10;

incr++;
decr--; //постфиксная запись это когда ставишь ++ после записи, а наоборот префиксная

console.log(incr, decr);

console.log(5%2);

console.log(2*4 === '8'); // === строгое сравнение, сравнивает еще по типу данных