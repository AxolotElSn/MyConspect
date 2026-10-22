'use strict';

function factorial(n){
    if (n === 1){
        return 1;
    }
    else{
         
        return n * factorial(n - 1);
    }
}
const result = factorial(5); 
console.log(result); // 24



function stepen(num, step) {
  if (step === 1) {
    return num;
  } else {
    return num * stepen(num, step - 1);
  }
}

const res = stepen(2, 8);
console.log(res);