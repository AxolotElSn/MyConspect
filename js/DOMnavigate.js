"use strict";

// Навигация по DOM - элементам, data атрибуты, претмущество for/of

// console.log(document.body);

// console.log(document.documentElement); // получаем всю html страницу

// console.log(document.body.childNodes); // получаем дочерние классы body

// console.log(document.body.firstChild); // 1ый ребенок внутри родителя (нода)
// console.log(document.body.firstElementChild); // 1ый ребенок внутри родителя (элемент)
// console.log(document.body.lastChild); // последний ребенок внутри родителя

// console.log(document.querySelector('#current').parentNode); // получаем родителя тут получим ноду
// console.log(document.querySelector('#current').parentNode.parentNode); // получаем родителя родителя тут тоже ноду
// console.log(document.querySelector('#current').parentElement); // а тут элемент


// console.log(document.querySelector('[data-current = "3"]').nextSibling); // получаем следующего соседа (ноду)
// console.log(document.querySelector('[data-current = "3"]').previousSiblingSibling); // получаем предыдущего соседа (ноду)

// console.log(document.querySelector('[data-current = "3"]').nextElementSibling); // получаем следующий элемент
// console.log(document.querySelector('[data-current = "3"]').previousSiblingSibling); // получаем предыдущий элемент


for (let node of document.body.childNodes) { // перебрать все childNodes внутри body и избавится от всех текстовых нод
    if (node.nodeName == '#text') {
        continue; // оператор позволяет остановить работу цикла
    }

    console.log(node);
} 
