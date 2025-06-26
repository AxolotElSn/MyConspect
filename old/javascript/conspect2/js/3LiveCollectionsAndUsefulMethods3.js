// Живые коллекции и полезные методы

'use strict';

const boxesQuerry = document.querySelectorAll('.box');
const boxesGet = document.getElementsByClassName('box');

boxesQuerry.forEach(box => {
    if(box.matches('.this')){ // matches - метод позволяющий найти элемент среди прочих с определенным css селектором, ну и соответственно что-нибудь с ним сделать
        console.log('This one!');
    } 
})

console.log(boxesQuerry[0].closest('.wrapper')); // метот ищет селектор в родителях

boxesQuerry[0].remove(); // получем состояние эдементов на момент вызова querrySelectorAll - получим 3 элемента, не смотря на удаление
boxesGet[0].remove(); // получем текущий результат потому что отслеживает все изменения в dom - дереве. Это и называют живые коллекции

for (let i = 0; i < 5; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    document.body.append(div);
    // boxesGet[boxesGet.length] = div; // так нельзя. Мы не можем изменять на прямую с html - коллекцией. Надо сделать из этого массив, но тогда мы сделаем коллекцию статичной
}

console.log(boxesQuerry); // есть поезные методы в ноде
console.log(boxesGet); // тут этого нет
// console.log(document.body.children) // получает детей body

console.log(Array.from(boxesGet)); // позволяет создать массив из массивоподобного объекта. Но получает обычный статичный массив. Это стоит применять тогда, когда нужно отследить изменения на каком-то промежутке



