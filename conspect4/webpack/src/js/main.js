// Нужно сделать так чтоб этой ф-ией можно было пользоваться из другого файла

function myModule() {
    this.hello = function() {
        console.log('hello');
    };

    this.goodbye = function() {
        console.log('bye!'); 
    };
}

module.exports = myModule; // module - это такой объект, exports - свойство. Туда помещаем то, что хотим экспортировать


