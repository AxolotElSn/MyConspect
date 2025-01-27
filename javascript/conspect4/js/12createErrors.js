'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: 'fff',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: ''
    }
]

try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);
    
        if (!blockObj.id) throw new SyntaxError(`В данных под номером ${i + 1} нет id`); // throw оператор который генерирует ошибку. Error - объект ошибки
    
        block.setAttribute('id', blockObj.id); // мы ставим каждому элементы id из объекта, но id есть не у всех элементов. Тут как бы надо чтоб была ошибка
        document.body.append(block);
    })
} catch(e) {
    if (e.name === "SyntaxError") { // если ошибка в отсутствии id, то выводим обработанную нами ошибку. Если нет, то выкидываем обычную ошибку. Это расчет на то что это непредвиденная ошибка
        console.log(e.message);
    } else throw e;
    
    // console.error(e.name);
    // console.log(e.stack);
}

const err = new Error('ahaha');
console.log(err.name, err.message, err.stack)