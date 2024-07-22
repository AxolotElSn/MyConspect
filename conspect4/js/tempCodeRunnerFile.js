'use strict';

// json - набор пар ключ - значение (как в объекте). Главное правило что все строки должны быть в двойных ковычках

const persone = {
    name: 'Alex',
    tel: '+79632343058',
    parents: {
        mom: 'Alena',
        dad: 'Alexandr'
    }
};

// console.log(JSON.stringify(persone)); // stringify() переделывает в json формат для того чтоб мы могли отправить данные на сервер
// console.log(JSON.parse(JSON.stringify(persone))); // parse делает ровно противоположное. ТО есть json формат переделывает в обычный для того чтоб мы уже могли в коде работать с данными которые придут с сервера

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);
