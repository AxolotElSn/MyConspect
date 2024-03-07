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

console.log(getTotalProgressByIreration(students));