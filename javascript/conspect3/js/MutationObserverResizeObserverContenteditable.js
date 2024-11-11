'use strict';
//MutationObserver, ResizeObserver и contenteditable

// contenteditable - атрибут который позволяет изменять элемент прямо на странице (писать в блоке текст, например)
const box = document.querySelector('.box');

let observer = new MutationObserver(mutationRecords => { // позволяет наблюдать за изменениями в dom-дереве
    console.log(mutationRecords);
});

observer.observe(box, { // первый аргумент - это элемент за которым мы ледим, второй - конфиг, то есть настройка как мы будем следить за элементом (удобно записать конфиги в объекте)
    childList: true
})

observer.disconnect();

ResizeObserver(); // тоже самое что и mutationObserver, только отслеживает изменение размера, а не контента
