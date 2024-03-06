// рекурсия ю-ху

function pow(x, n){ // задача на возведение в степень
    let res = 1;

    for (let i = 0; i < n; i++) {
        res *= x;
    }

    return res;
}

function pow(x, n) { // тоже самое, только рекурсия
    if (n === 1) {
        return x;
    } else {
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
