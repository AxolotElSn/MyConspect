'use strict';

class Rectangle { // 1) тут концепция. Такой принцип ооп называется абстракция. То есть это когда мы отделяем концепцию от ее экземпляра
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

// 2) такой принцип ооп называется наследование
class ColoredRectangleWithText extends Rectangle { // extends - наследование. То есть класс ColoredRectangleWithText унаследует все методы и конструкторы класса Rectangle (удобно)
    constructor (height, width, text, bgColor) {
        super(height, width); // ВАЖНО: super() должен быть на самом первом месте в конструкторе. Метод вызывающий супер конструктор родителя. Простыми словами вызывает тоже самое что было у конструктора родителя
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProops() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

// 2)
const div = new ColoredRectangleWithText(25, 10, 'ahaha', 'red');
div.showMyProops()
console.log(div.calcArea);

// 1) тут экземпляр
const square = new Rectangle(10, 20); // в square теперь лежит объект со свойствами height и width и методом calcArea() (напоминание с прошлого урока)
const long = new Rectangle(15, 100);

console.log(square.calcArea()); // 200
console.log(long.calcArea()); // 1500


