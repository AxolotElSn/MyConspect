const myAwesomeDB = {
    movies: [],
    actors: [],
    // idd: 123 // id не должен менятся
    [Symbol("idd")]: 123,
    [Symbol.for("test2")]: 555
}

// сторонний код библиотеки

myAwesomeDB.idd = '5455748674'; // допустим что мы меняем id но мы не должны это делать

console.log(myAwesomeDB["idd"]); // 5455748674
console.log(myAwesomeDB); // { movies: [], actors: [], idd: '5455748674', [Symbol(idd)]: 123 }

myAwesomeDB.test2 = 987;
console.log(myAwesomeDB)
console.log(myAwesomeDB[Symbol.for('test2')]);