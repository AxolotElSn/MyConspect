const btn = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() { // так не делают
//     alert('Click bebe');
// }

// btn.onclick = function() { // потучим только 2ой клик. Это неправильно + нельзя удалить такое событие
//     alert('Click 2');
// }

// btn.addEventListener('click', () => { // callbac ф-ия это ф-ия которая выполняется только после других. click - это клик
//     alert ('Click bebe')
// });

// btn.addEventListener('click', () => { // выполнятся оба события
//     alert ('Click 2')
// });

let i = 0;  
const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
}

// btn.addEventListener('mouseenter', (e) => { // e или event (можно называть как угодно) это объект который передается как 1ый арнумент в callback ф-ию и содержит в себе информацию об элементе с которым мы взаимодействуем
//     // console.log('На кнопку навели мышкой');
//     // btn.style.backgroundColor = 'red';
//     console.log(e);
//     console.log(e.target)
//     e.target.remove();
// });

// btn.addEventListener('click', deleteElement); // мы вызываем ф-ию deleteElement в которой удаляем это событие. По этому при повтороно нажатии e.target больше не выводится т.к. удалили событие
// overlay.addEventListener('click', deleteElement); // ВСПЛЫТИЕ СОБЫТИЙ (СОБЕС) - это когда обработчик событий сначала срабатывает на самом вложенном элементе, а потом на более высоких по вложенности     

btn.forEach(item => {
    item.addEventListener('click', deleteElement, {once: true}); // это важно при querySelectorAll т. к. псевдомассив надо разложить на элементы
}); // так же есть 3ий аргумент это объект в который мы можем передать различные опции. К примеру свойство once позволяет использовать событие только 1 раз. Да это альтернатива removeEventListener

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault(); // отменяем стандартное поведение браузера. Тут мы не перейдем по ссылке, а выведем в консоль e.target
    console.log(e.target);
});


