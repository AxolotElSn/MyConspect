function pow(x, n) { // тоже самое, только рекурсия
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1); // при каждом вызове ф-ии уменьшаем n до того момента когда n станет равным 1. Тогда ф-ия начинает возвращаться обратно умножая x на 2
    } // т. е. ф-ия ввызывает саму себя до того момента пока не достигнит базового значения, в нашем случае это n = 1, а потом n - 1 раз умножит на n на x и еще раз на x
}

console.log(pow(2, 1)); //2
console.log(pow(2, 2)); //4
console.log(pow(2, 3)); //8
console.log(pow(2, 4)); //16