// Действия с элементами на странице
'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circels = document.getElementsByClassName('circle'), 
      hearts = document.querySelectorAll('.heart'), 
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// console.dir(box);
// box.style.backgroundColor = 'green'; // style - свойство конкретного DOM-элемента. В нашем случае box
// box.style.width = '500px';

btns[1].style.borderRadius = '100%';

// circels.style.backgroundColor = 'red'; // ошибка, у нас несколько элементов, надо для начала деструктуризировать псевдомассив, или указать конкретный элемент через []

box.style.cssText = 'background-color: black; width: 500px'; // cssText, позволяет строкой писать сколько угодна css-стилей

// for (let i = 0; i < hearts.length; i++) { // Перебираем псевдомассив hearts с сердечками (так не делаем, есть более удобные методы)
//     hearts[i].style.backgroundColor = 'grey';
// }

hearts.forEach(item => {
    item.style. backgroundColor = 'grey';
});

/////////////////////////////
// Формирование новых элементов

const element = document.createElement('div'); // createElement - создает новый элемент который существует только внутри скрипта. В скобках указываем нужный тег
// const text = document.createTextNode('Привет'); // createTextNode - создает текст бкз тега

element.classList.add('black'); // classList - добавляет css класс элементу

// document.body.append(element); // добавляем наш созданный element в конец body при помощи метода append
// document.querySelector('.wrapper').append(element); // Можно прям сразу получить элемент со страницы и добавить в него созданный элемент

wrapper.append(element);
// wrapper.prepend(element); // prepend - добавляет элемент в начало wrapper

// hearts[1].before(element); // before - добавляет элемент перед конкретным элементом
// hearts[1].after(element); // after - добавляет элемент после конкретного элемента
// wrapper.insertBefore(element, hearts[1]); // устаревший метод. Вставляет(первый аргумент) элемент до конкретного элемента(второй аргумент)


// circels[0].remove(); // remove - Удаляет конерктный элемент
// wrapper.removeChild(hearts[1]); // Устаревший метод. Удаляет элемент

// hearts[0].replaceWith(circels[0]); // replaceWith - заменяет элемент. В нашем случае первое сердечко заменяется первым кружком 
// wrapper.replaceChild(circels[0], hearts[0]); // Устаревший метод. 1ый аргумент, на что меняем, 2ой аргумент, что меняем

////////////////////////////////////////////
// Добавляем текст или html код

// element.innerHTML = 'Hello world'; // Метод добавляет текст, но и можно добавить html структуру
element.innerHTML = '<h1>Hello World!</h1>';

// element.textContent = 'Hello!' // Тоже добавляет только текст. Html структура тоже будет просто текстом

element.insertAdjacentHTML('beforebegin', '<h2>Hello Pipka!</h2>'); // insertAdjacentHTML вставляет кусочек html кода перед или после определенных тегов. beforebegin - вставляет перед элементом element. afterbegin - вставляет в начало элемента. beforeend - вставляет в конец елемента. afterend - вставляет после элемента 


