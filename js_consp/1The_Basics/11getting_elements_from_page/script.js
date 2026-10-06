// Получение элементов со страницы
'use scrict';

// document - глобальный объект в котором все элементы страницы. Существует только в браузере

// по id

const box = document.getElementById('box'); // getElementById - свойство объекта document. Получаем элемент со страницы по его id
console.log(box); // <div class="box" id="box"></div>

/////////////////////
// по тегу

const btns = document.getElementsByTagName('button'); // getElementsByTagName - свойство объекта document. Получаем элементы по тегу
// В btns мы получили не конкретные элементы, а псевдомассив в котором все кнопки страницы. Даже если она одина
console.log(btns); // HTMLCollection(5) [button, button, button, button, button]

const btn2 = document.getElementsByTagName('button')[2]; // Так мы получаем конкретнцю кнопку, указывая в квадраьных скобках ее номер по порядку начиная с 0
console.log(btn2); // <button>3</button>

//////////////////////
// по классу

const circles = document.getElementsByClassName('circle'); // getElementsByClassName - свойство объекта document. Получаем элементы по классу. Принцип такойже как когда получаем по тегу. Так же получаем html коллекцию
console.log(circles); // HTMLCollection(3) [div.circle, div.circle, div.circle]

//////////////////////
// по селекторАМ

// Внутрь скобок помещаем css - селектор, абсолютно любой
const hearts = document.querySelectorAll('.heart'); // . ставим тк работаем с css классом
// console.log(hearts); // NodeList(3) [div.heart, div.heart, div.heart]

hearts.forEach(item => {
    console.log(item) // <div class="heart">…</div>
});

//////////////////////
// По селекторУ

// Внутрь скобок помещаем css - селектор, абсолютно любой, но получаем только перовый эдемент
const oneHeart = document.querySelector('.heart');
console.log(oneHeart) // <div class="heart">…</div>




