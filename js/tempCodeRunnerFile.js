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

console.log(calcFactorial(5.5));