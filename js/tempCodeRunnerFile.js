const array = ["a", "b", "c"];
const newArray = [...array]; // тут лежит новая копия array (только тут уже spread оператор (оператор разворота))

const q = {
    one: 1,
    two: 2
};

const newQ = {...q}; // ну тоже самое и с объектами
newQ.a = 50;
newQ.b = "hehe21";

console.log(newQ);