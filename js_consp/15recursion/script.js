// Рекурсия
'use strict';

//ф-ия возведения в степень
function pow (x, n) {
    let result = 1;

    for (let i = 0; i < n; i++) {
        result *= x
    }
    return result;
}
// console.log(pow(2, 5)); // 32

function pow (x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1) // вызываем ф-ию внутри этой же ф-ии. Сначала ф-ия спускается вниз, потом когда дошла до базового случая (n === 1) возвращается обратно собирая результат
    }
}
console.log(pow(2, 5))
// Пример
// function sum(n) {
//     if (n === 0) return 0;   // базовый случай
//     return n + sum(n - 1);   // рекурсивный шаг
// }

sum(5); // 15
// sum(5)
//   → 5 + sum(4)
//         → 4 + sum(3)
//               → 3 + sum(2)
//                     → 2 + sum(1)
//                           → 1 + sum(0)
//                                 → 0        ← дошли до базового случая
//                           ← 1 + 0 = 1
//                     ← 2 + 1 = 3
//               ← 3 + 3 = 6
//         ← 4 + 6 = 10
//   ← 5 + 10 = 15

let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
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
        }]
    }
};

// Object.values() метод возвращает массив значений свойств заданного объекта, представленных в виде перечисляемых строковых ключей
// Array.isArray()метод определяет, является ли переданное значение массивом. Возващает true/false

function getTotalOrogressByRecursion(data) {
    if (Array.isArray(data)) {
        let total = 0;

        for (let i = 0; i < data.length; i++) {
            total += data[i].progress;
        }
        return [total, data.length];
    } else {
        let total = [0, 0];

        for(let subData of Object.values(data)) {
            const subDataArr = getTotalOrogressByRecursion(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }
        return total
    }
}

const result = getTotalOrogressByRecursion(students);
console.log(result[0]/result[1])



function getTotalOrogressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;

            for (let i = 0; i < subCourse.length; i++) {
                total += subCourse[i].progress;
                }
            }
        }
    }

    return total / students;
}

console.log(getTotalOrogressByIteration(students));




