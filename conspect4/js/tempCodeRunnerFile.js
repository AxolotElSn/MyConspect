class HomeWork {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    #surname = '';

    say() {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this.age}`);
    }

    get surname() {
        return this.#surname;
    }

    set surname(surname) {
        if (typeof surname === 'string') {
            this.#surname = surname;
        } else {
            console.log('Недопустимое значение')
        }
    }
}

const home = new HomeWork('Alex', 21);
home.surname = 'Orlov';
home.say();