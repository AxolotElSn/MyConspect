// classList и делегирование событий
'use strict';

const btns = document.querySelectorAll('button');
// console.log(btns[0].classList.length); // 2 // classlist большое свойство содеожащее много полезных методов classList.length - показывает сколько класснов у элемента

// console.log(btns[0].classList.item(0));// blue // позволяет получить класс который располагается под определенным индексом

// console.log(btns[0].classList.add('red')); // undefined // добавляет класс элементу

// console.log(btns[0].classList.remove('blue')); // undefined // удаляет класс

// console.log(btns[0].classList.toggle('blue')); // true // работает как переключатель, если класс есть, то метод его уберет, если класса нет, то метод его добавит. Возвращает будиновое значение

// console.log(btns[1].classList.add('red'));
// if (btns[1].classList.contains('red')) { // contains - метод проверяющий есть ли определенный класс на этом элементе и возвращает булиновое значение
//     console.log('red')
// }

btns[0].addEventListener('click', () => { // пример
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
    btns[1].classList.toggle('red');
});

// console.log(btns[0].className) // blue some // className - устаревший метод

// делегирование - когда накладываем событие на родителя элемента
const wrapper = document.querySelector('.btn-block');

wrapper.addEventListener('click', (e) => { // накладываем событие не на сам элемент, а на его родителя и потом e.target.tagName == 'BUTTON', проверяем что клик будет проходить только по кнопкам
    if (e.target && e.target.tagName == 'BUTTON') { // e.target не все элементы содержат события клика, как например тег br. По этому мы проверяем наличие e.target
        console.log('Hello!');
    }
});

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);


