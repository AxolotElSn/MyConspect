let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3; // ** возведение в степень
}

let end = new Date();

console.log(`Цикл отработал за ${end - start} миллисекунд`);