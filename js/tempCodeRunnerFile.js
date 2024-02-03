const options = {
    name: 'boroda',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() { // можно делать свои методы в объектах
        console.log("Test");
    }
}

options.makeTest();

const {border, bg} = options.colors; // такая структура называется деструктуризацией (на будущее пригодится)
console.log(border);