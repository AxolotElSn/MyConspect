// Классы es6

'use strict';

class Rectangle { // Напоминание: this в классах и конструкторах - новый экземпляр объекта
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(square.calcArea());
console.log(long.calcArea());


class ColoredRectangleWithText extends Rectangle { // extends - наследуем методы и свойства от родителя Rectangle
    constructor(height, width, text, bgColor) {
        super(height, width); // метод вызывающий все свойства у родителя. super всегда идет первой строчкой
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`)
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World!', 'green');

div.showMyProps();
console.log(div.calcArea()); // Мы можем обратиться к методу родителя