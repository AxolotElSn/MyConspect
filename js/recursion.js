// рекурсия ю-ху

// 1

function pow(x, n){ // задача на возведение в степень
    let res = 1;

    for (let i = 0; i < n; i++) {
        res *= x;
    }

    return res;
}

function pow(x, n) { // тоже самое, только рекурсия
    if (n === 1) { // - база рекурсии
        return x; // n - 1 это шаг рекурсии
    } else { // глубина рекурсии это кол-во вложенных вызовов ф-ии
        return x * pow(x, n - 1); // при каждом вызове ф-ии уменьшаем n до того момента когда n станет равным 1.
        //Тогда каждая вызванная ф-ия возвращает 2 n - 1 раз. получается x в степени n - 1. По этому еще перед pow() стоит * 2 чтобы получилось число x в степени n
    } // т. е. ф-ия ввызывает саму себя до того момента пока не достигнит базового значения, в нашем случае это n = 1, а потом n - 1 раз умножит на n на x и еще раз на x
}

// Когда функция вызывает саму себя в рекурсии, каждый вызов функции добавляется в стек вызовов (call stack). Поскольку в каждом новом вызове аргумент n уменьшается на 1,
//рекурсивные вызовы будут продолжаться до тех пор, пока n не станет равным 1 (это базовый случай).

//Когда достигается базовый случай, функция начинает возвращаться обратно, закрывая каждый вызов функции. После того, как вызов функции завершается, он удаляется из стека вызовов.

//Таким образом, когда рекурсия достигает базового случая и начинает возвращаться назад, каждый следующий вызов функции рекурсивно умножает свое значение x на результат 
//предыдущего вызова, пока стек вызовов не опустеет.

console.log(pow(2, 1)); //2
console.log(pow(2, 2)); //4
console.log(pow(2, 3)); //8
console.log(pow(2, 4)); //16

// 2

let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Alex',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
        name: 'Ann',
        progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }],

        semi: { // рекурсия будет работать с таким объектом, а итреративный метод - нет
            students: [{
                name: 'Test',
                progress: 100
            }]
        }
    }
};


function getTotalProgressByIreration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)){ // Object.values - это метод позволяющий получить массив со значениями в объекте (в нашем случае объекта students). В coursre записывается отжельный элемент массива
        if (Array.isArray(course)) { // Array.isArray - метод возвращающий true, если объект является массивом, и соответственно false, если нет
            students += course.length;
            
            for (let i = 0; i < course.length; i++){
                total += course[i].progress; // i - получается номер массива. То есть course[0] - это первый массив, course[1] это второй массив
            }
        } else {
            for (let subCourse of Object.values(course)){ // course получается менее вложенный объект
             students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++){
                    total += subCourse[i].progress;
                }
            }
        }
    }

    return total / students;
}

// console.log(getTotalProgressByIreration(students));


function getTotalByRecyrsion(data) {
    if (Array.isArray(data)) {
        let total = 0;
        
        for (let i = 0; i < data.length; i++){
            total += data[i].progress;
        }

        return [total, data.length] // массив для того чтоб ф-ия могла вернуть сразу 2 значения (студенты и проргесс)
    } else {
        let total = [0, 0]; // прогресс, студенты

        for (let subData of Object.values(data)){
            const subDataArr = getTotalByRecyrsion(subData);
            total[0] += subDataArr[0]; // прогресс
            total[1] += subDataArr[1]; // студенты
        }
        return total;
    }
}

const result = getTotalByRecyrsion(students);

console.log(result[0] / result[1]);

// 3 - задача на рекурсию которуб могут дать на собесе

function calcFactorial (num) {

    if(typeof(num) !== 'number'){
        return "Error";
    }

    if (num >= 1){
        return num * calcFactorial(num - 1);
    } else {
        return 1;
    }
}

console.log(calcFactorial(5));
