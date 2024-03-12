"use strict";

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

// box.style.backgroundColor = 'green';
// box.style.width = '500px';

box.style.cssText = 'background-Color: green; width: 500px'

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';


// for (let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'brown';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'brown';
});

const div = document.createElement('div'); // создание элемента. Но он существует только внутри файла js
// const text = document.createTextNode('Тут был я');

div.classList.add('black'); // добавляем класс 

wrapper.append(div); // тут уже элемент прописывается на странице благодаря методу append()
// document.querySelector('.wrapper').append(div); // так можно прописывать элементы внутри родителей
// wrapper.appendChild(div); // устаревшая запись

// wrapper.prepend(div); // этот метод вставляет в начало элемент

// hearts[0].before(div); до [] элемента
// hearts[0].after(div); // после [] элемента

// wrapper.insertBefore(div, hearts[1]); // тоже устаревшая запись. В скобках первый аргумент- то что вставляем, второй перед каким элементом вставляем

// circles[0].remove(); // удаление элемента
// wrapper.removeChild(hearts[1]); // тоже устаревшая запись

hearts[0].replaceWith(circles[0]); // заменили первое сердечко первым кружочком
// wrapper.replaceChild(circles[0], hearts[0]); // да еще одна устаревшая запись :D

// div.innerHTML = "<h1>Hello World</h1>"; // можно вставлять html - структуры, ну или просто текст

// div.textContent = "Hello"; // в этот метод html - структура не войдет. Только текст (это еще вопрос безопасности)


div.innerHTML = "<h1>Hello World</h1>";
//этот метод вставляет кусочек html - кода перед или после тегов
div.insertAdjacentHTML('beforebegin', '<h2>Hello1</h2>') //beforebegin вставляет html - код перед элементом
div.insertAdjacentHTML('afterbegin', '<h2>Hello2</h2>') // afterbegin вставляет html - код в начало 
div.insertAdjacentHTML('beforeend', '<h2>Hello3</h2>') // beforeend вставляет html - код преред концом
div.insertAdjacentHTML('afterend', '<h2>Hello4</h2>') // afterend вставляет html - код после 