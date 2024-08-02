const obj = {
    alex: 'persone',
    ann: 'persone',
    dog: 'amimal',
    cat: 'animal'
};

// const newArr = Object.entries(obj); // метод превращающий объект в двумерный массив (матрицу). Получаем массив с массивами
// console.log(newArr); // [ [ 'alex', 'persone' ], [ 'ann', 'persone' ], [ 'dog', 'amimal' ], [ 'cat', 'animal' ] ]

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone') // [ [ 'alex', 'persone' ], [ 'ann', 'persone' ] ]
.map(item => item[0]);

console.log(newArr);