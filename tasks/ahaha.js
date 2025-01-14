'use strict';

const str1 = 'My mane is Alex';
const str2 = str1.slice(15, 11)

console.log(str1);
console.log(str2);

const a = 0;
if (!a) {
    console.log(a);
}

const arr = [
    a= 1,
    b= 2,
    c= true,
    ahaha= 'string ahaha',
    d= 505,
    e= {a:'kia k5',
        b: 'bmw f 90',
        c: 'ahaha'
    }
]

console.log(...arr);// 1 2 true string ahaha 505 { a: 'kia k5', b: 'bmw f 90', c: 'ahaha' }
