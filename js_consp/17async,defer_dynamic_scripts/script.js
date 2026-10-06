// async> defer, Динамические скрипты
'use strict';

const p = document.querySelectorAll('p');
console.log(p);

const script = document.createElement('script'); // Еще один вариант добавления скрипта. Получается что скрипт отработает только после того как он добавитсвя на страницу
script.src = 'test.js';
document.body.append(script)