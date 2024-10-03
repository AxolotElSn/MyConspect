function cards () {
// используем классы для карточек

class MenuCard {
    constructor(src, alt, title, descr, prise, parentSelector, ...classes) {
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.prise = prise;
        this.classes = classes;
        this.parent = document.querySelector(parentSelector); // то куда мы пушим наш элемент
        this.transfer = 27;
        this.cangeToUAH();
    }

    cangeToUAH() {
        this.prise = this.prise * this.transfer;
    }

    render() {
        const element = document.createElement('div');

        if (this.classes.length === 0) { // Проверка если забыли написать дефолтный класс
            this.element = 'menu__item';
            element.classList.add(this.element);
        } else {
            this.classes.forEach(className => element.classList.add(className)); // перебираем массив rest оператора чтоб могли добавдять классы в dom елементы просто написав их в MenuCard
        }

        element.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.prise}</span> грн/день</div>
            </div>
        `;
        this.parent.append(element); // в конец родителя ставим наш элемент
    }
}

// const div = new MenuCard();
// div.render();

const getResource = async (url) => { // ф-ия настраиыает наш запрос, посылает его на сервер и получает ответ и трансформирует его в json
    const res = await fetch(url);

    if(!res.ok){ // проверка на ошибки. Делаем потому что fetch не возвращает catch в случае ошибки
        throw new Error(`Could not fetch ${url}, status ${res.status}`); // throw - это те ошибки которые пишутся нам в консоль. Error() - объект ошибок
    }

    return await res.json();
};

// getResource('http://localhost:3000/menu')
//     .then(data => {
//         data.forEach(({img, altimg, title, descr, price}) => { // перебираем все карточки и отрисовываем их. А так же используем деструктуризацию объекта
//             new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
//         })
//     });

axios.get('http://localhost:3000/menu') // используем axios
    .then(data => {
        data.data.forEach(({img, altimg, title, descr, price}) => { // data.data потому что мы обращаемся к объекту который мы получили. То есть обращаемся к свойству объекта data который мы получили из библиотеки
            new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
        });
    });

// getResource('http://localhost:3000/menu') // еще вариант как можно сделать
//     .then(data => createCard(data));

// function createCard(data) {
//     data.forEach(({img, altimg, title, descr, price}) => {
//         const element = document.createElement('div');
//         element.classList.add('menu__item');
//         element.innerHTML = `
//         <img src=${img} alt=${altimg}>
//         <h3 class="menu__item-subtitle">${title}</h3>
//         <div class="menu__item-descr">${descr}</div>
//         <div class="menu__item-divider"></div>
//         <div class="menu__item-price">
//             <div class="menu__item-cost">Цена:</div>
//             <div class="menu__item-total"><span>${price}</span> грн/день</div>
//         </div>
//         `;

//         document.querySelector('.menu .container').append(element);
//     });
// }
}

module.exports = cards;