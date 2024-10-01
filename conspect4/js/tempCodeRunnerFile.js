const user = (function(){
        const privat = function() { // Мы не имеем доступа к этой ф-ии т.к. она лежит внутри локальной области видимости
            console.log('I am privat!1');
        };

        return {
            sayHello: privat
        };
}());

user.sayHello()