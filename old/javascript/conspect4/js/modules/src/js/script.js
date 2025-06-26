// Сюда мы экспортируем из main.js
// Если используем тайпмодули, то нужно приписывать .js

// import {one, two} from './main'; // так импортируем
// console.log(`${one} and ${two}`);

// import {one as first} from './main'; // так сразу можно переименовать при помощи as
// console.log(first);

// import * as data from './main'; // так при помощи * можно импортировать все что есть в файле main.js и обозвать. То есть data станет объектом со всем что мы импортировали
// console.log(`${data.one} and ${data.two}`);
// data.sayHi();

import sayHi from "./main"; // так можно, потому что это экспортируется по умолчанию с помощью default
// import sayHi from "./main.js"; // так писать если используем тайпмодули в верстке
sayHi(); // Hello!


