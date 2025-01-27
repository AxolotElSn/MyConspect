// ClassList и делегирование событий
// classList это свойство DOM элемента. Позволяет удобно работать с html - классами

const btns = document.querySelectorAll('button');

// console.log(btns[0].classList.length); // показывает сколько классов у элемента (просто число классов) (2)
// console.log(btns[0].classList.item(0)); // позволяет узнать класс под определенным индексом (blue)

console.log(btns[1].classList.add('red')); // добавляет класс элементу 
// console.log(btns[0].classList.remove('blue')); // удаляет класс у элемента
// console.log(btns[0].classList.toggle('blue')); // если класс есть на элементе, то он удалится, если класса нет, то добавится


// if (btns[1].classList.contains('red')){ // проверяет наличие класса и возвращает булиновое значение
//     console.log('ahaha');
// }

// btns[0].addEventListener('click', () => {
//     if (!btns[1].classList.contains('red')) {
//         btns[1].classList.add('red');
//     } else {
//         btns[1].classList.remove('red');
//     }
// });

btns[0].addEventListener('click', () => { // если кнопка красная, то при клике станет обычной. Если обычная, то станет красная
    if(btns[1].classList.contains('red')) {
        btns[1].classList.remove('red');
    } else {
        btns[1].classList.add('red');
    }
}); // вместо этого можно использовать toggle()

// console.log(btns[0].className) // так не делать

// делегирование событий

const wrapper = document.querySelector('.btn-block');

wrapper.addEventListener('click', (event) => { // вешаем обработчик не на кнопку, а на обертку, на родительский класс. Тогда действие будет работать на всех элементах родительского класса
    // console.dir(event.target)
    if (event.target && event.target.tagName == "BUTTON") { // event target нужно прописать, т к не у всех элементов есть возможность клика. Так мы проверяем можно ли кликнуть на элемент
        console.log('hi')
    }
}); // если делать через forEach, то обработчик не повесится на новые элементы добавленные через append()


const btn = document.createElement('button');
btn.classList.add('green');
wrapper.append(btn);

wrapper.addEventListener('click', (event) => { 
    // console.dir(event.target)
    if (event.target && event.target.matches("button.red")) { // matches это еще один метод делегирования. Он проверяет, совпадает ли элемент с тем что мы наришем в скобках. 
        console.log('ahaha')
    } // просто удобный метод, потому что мы уже указываем интересующие нас селекторы
});

