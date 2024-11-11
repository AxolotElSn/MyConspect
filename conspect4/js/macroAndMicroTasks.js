'use strict';
// Есть макро и микро задачи. У нас есть очередь макро задач, это то что мы учили в event loop. Но есть и очередь микро задач. Микро задачи это те что формируются внутри then catch finally, или при помощи оператора await. 

// По итогу работает так: Как только завершается одна макро задача, после нее выполняются все микро задачи, которые скопились в очереди

setTimeout(() => { // макро задача
    console.log('timeout');
})

Promise.resolve() 
    .then(() => { // микро задача
        console.log('promise');
    });

queueMicrotask(() => { // queueMicrotask - команда которая запускает микро задачу
    console.log('wow');// code promise wow promise timeout
})

Promise.resolve() 
    .then(() => { // микро задача
        console.log('promise');
    });

console.log('code');

// code promise timeout
