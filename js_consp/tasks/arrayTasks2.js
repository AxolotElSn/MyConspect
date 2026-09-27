'use strict';

// У вас есть список учеников, которые хотят поиграть в игру:

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
// Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

// Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];


function sortStudentsByGroups(arr) {
    // let sortArr = [...arr].sort();
    let sortArr = arr.sort();
    let newArr = [];

    while (sortArr.length >= 3) {
        newArr.push(sortArr.splice(0, 3));
    }

    if (sortArr.length > 0) {
        newArr.push(sortArr.join(', '));
    }

    console.log(newArr);
}

sortStudentsByGroups(students);
