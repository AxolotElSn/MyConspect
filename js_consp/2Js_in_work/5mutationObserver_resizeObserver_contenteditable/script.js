// mutationObserver resizeObserver и contenteditable
// см в html

// Тоесть let observer = new MutationObserver это просто создание нового наблюдателя, а то что идет потом callback - что что мы делаем при изменении, observer.observe() настройка наблюдателя, за какими параметрами элемента мы наблюдаем. Пишем отдельно друг от друга, потому что мы можем наблюдать за разными элементами при одном созданном наблюдателе. Тоесть мы можем наблюдать за одним элементом по одним параметрам, и за другим по другим параметрам, при этом выполнять одно и то же действие в колбеке у одного наблюдателя

// mutationRecords - это массив объектов, которые описывают изменения, произошедшие в наблюдаемом элементе. Каждый объект в этом массиве содержит информацию о конкретном изменении, например, добавление или удаление дочерних элементов, изменение атрибутов и т.д. В нашем случае мы наблюдаем за изменениями в дочерних элементах (childList) элемента с классом 'box'.

'use strict';

const box = document.querySelector('.box');

let observer = new MutationObserver(mutationRecords => {
    console.log(mutationRecords);
})

observer.observe(box, {
    childList: true
})

observer.disconnect() // отключение наблюдателя

let resize = new ResizeObserver(records => { // тоже самое, только отслеживает изменение размеров элемента
    console.log(records);
    console.log('resize');
})

resize.observe(box)