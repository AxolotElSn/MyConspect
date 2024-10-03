export let one = 1;

let two = 2;

export {two};

export default function sayHi() { // default говорит о том что экспортируется по умолчанию. Это позволяет экспортировать напрямую и не надо давать имя экспорту
    console.log('Hello!')
}

// Важно чтоб у того что мы экспортируем было имя