// Навигация по DOM - элементам, data - атрибуты, преимущество for of
'use strict';

// console.log(document.documentElement); // Получаем всю страницу. (тег html)

// При помощи методов ниже мы получаем текстовые ноды (псевдомассмвы)
// console.log(document.body.childNodes); // получаем детей body
// console.log(document.body.firstChild); // Получаем первого ребенка
// console.log(document.body.lastChild); // получаем последнего ребенка

// console.log(document.querySelector('#current').parentNode.parentNode); // Получили элемент и получаем его родителей при помощи parentNode

// console.log(document.querySelector('[data-current="3"]').nextSibling); // nextSibling - получаем следующий элемент
// console.log(document.querySelector('[data-current="3"]').previousSibling); // previousSibling - получаем предыдущий элемент

// Тут получаем уже сам элемент
// console.log(document.querySelector('[data-current="3"]').nextElementSibling); // nextElementSibling получаем следующий элемент
// console.log(document.querySelector('[data-current="3"]').previousElementSibling); // previousElementSibling получаем предыдущий элемент

// console.log(document.querySelector('#current').parentElement); // parentElement - получаем родительский элемент

// console.log(document.body.firstEl
// ementChild); // Получаем первого ребенка
// console.log(document.body.lastElementChild); // Получаем последнегшо ребенка

for (let node of document.body.childNodes) { // Так можно раскрыть ноду
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node)
}

