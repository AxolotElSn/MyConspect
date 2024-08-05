'use strict';

window.addEventListener('DOMContentLoaded', () => {
    //Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) { // i = 0 это на случай если фунуция будет вызываться без аргумента
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => { // повторяю для ясности. Мы вешаем обработчик на родителя, а проверяем уже сам элемент. Таким образом мы работаем сразу со всеми элементами в родителе (делегирование)
        const target = event.target; // event.target -свойство объекта event - это элемент с которым мы взаимодействуем

        if(target && target.classList.contains('tabheader__item')) { // по сути это гарантия что мы клкааем именно на элемент
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });


    //Timer

    const deadLine = '2025-06-05';
    

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;
        const t = Date.parse(endtime) - Date.parse(new Date()); // получили разницу между deadline и сегодняшней датой в милисекундах
        if (t <= 0) {
            const tblock = document.querySelectorAll('.timer__block');    
            tblock.forEach(i => { // тут я сам сделал чтоб цыфры были красными если таймер будет 0
                i.style.color = 'red';
            })

            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24)); // получили кол-во дней из милисекунд, Math.floor округление до ближайшего целого
            hours = Math.floor((t / (1000 * 60 * 60) % 24)); // получили часы, %24 нужен чтоб не было больше 24 часов
            minutes = Math.floor((t / (1000 * 60) % 60));
            seconds = Math.floor((t / 1000) % 60);
        }
            
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }
    
    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000); // делаем так чтоб ф-ия обновлялась ежесекундно
        
        updateClock(); // вызываем раньше чтоб не было миганий

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadLine);

    //modal-window

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal');

    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId);
    }    

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal)
    });

    function closeModal() {
        // modal.classList.add('hide');
        // modal.classList.remove('show');
        modal.classList.toggle('hide');
        document.body.style.overflow = '';
    }


    modal.addEventListener('click', (e) => { // окно закроется при клике на крестик
        if (e.target === modal || e.target.getAttribute('data-close') == '') { // если есть дата атрибут data-close на элементе и мы на него кликаем, то закрываем окно (этот атрибут есть на крестике). Это сделали ля того чтоб событие работало на динамически созданных элементах
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => { // окно закроется при клике на esc
        if (e.code == "Escape" && modal.classList.contains('show')){
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 50000);

    function showModalByScroll() {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) { // -1 ставить надо из-за бага. На некоторых мониторах может не открыться модальное окно
            openModal(); // window.scrollY - высотра прокрутки скрола, document.documentElement.clientHeight - высота нашего экрана, document.documentElement.scrollHeight - высота всего скрола на странице. Таким образом когда сумма высоты нашего экрана и высоты прокрута скрола совпадает с всей длинной скрола - это значит что мы докрутили до конца страницы
            window.removeEventListener('scroll', showModalByScroll) // это для того чтоб окно не вызывалось пр каждом прокруте до конца
        }
    }

    window.addEventListener('scroll', showModalByScroll);


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

    getResource('http://localhost:3000/menu')
        .then(data => {
            data.forEach(({img, altimg, title, descr, price}) => { // перебираем все карточки и отрисовываем их. А так эе используем деструктуризацию объекта
                new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
            })
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

    // Forms

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо, скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так'
    }

    forms.forEach (item => {
        bindPostData(item);
    });

    // async - говорит о том что в ы-ии будет какой-то асинхронный код
    // await - дожидается результата и тоько потом позволяет коду идти дальше
    // async и await всегда действуют в паре. Нельзя записать что-то одно
    const postData = async (url, data) => { // ф-ия настраиыает наш запрос, посылает его на сервер и получает ответ и трансформирует его в json
        const res = await fetch(url, { // если этого не сделать, то пока не придет результат в переменной res будет ничего и из-за этого будет ошиька. Нам необходимо дождаться результата запроса и по этому мы ставим await
            method: "POST",
            body: data,
            headers: {
                'Content-type': 'application/json'
            }
        });

        return await res.json(); // мы не знаем сколько времени нам понадобится на перевод в обычный объект. По этому тоже ставим await
    }

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {  // событие срабатывающее на все что отправляет данные
            e.preventDefault(); // отменяем стандартное поведение браузера. Эта команда должна быть первая в ajax запросах

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage) // ставит спинер (загрузка типа анимация) в конец элемента statusMessage

            // заменили на fetch (а это старый формат) const request = new XMLHttpRequest();
            // тут тоже request.open('POST', 'server.php');


            // заменили на fetch (а это старый формат) request.setRequestHeader('Content-type', 'application/json'); // это прописываем если работаем с json форматом. Зависит от бек-енда
            // request.setRequestHeader('Content-type', 'multipart/form-data'); // не прописываем потому что используем XMLHttpRequest + formData. Заголовок формируется автоматически
            // formData - объект позволяющий быстро сформировать данные введеные с определенной формы. ВАЖНО когда мы используем XMLHttpRequest и formData - заголовок прописывать не нужно
            const formData = new FormData(form); // важно чтоб в html у всего что может отправлять данные на сервер, напрмер input был атрибут name

            //это прописываем если работаем с json форматом - трансформация formdata в json формат
            // const object = {};
            // formData.forEach (function (value, key) { // переписываем объект FormDatra в обычный объект
            //     object[key] = value;
            // }); старый код
            
            // const obj = { a: 23, b: 50} пример
            // console.log(Object.entries(obj)); // метод делающий из объекта массив с массивами [ [ 'a', 23 ], [ 'b', 50 ] ]

            const json = JSON.stringify(Object.fromEntries(formData.entries())); // То есть 1 действие - превращаем formData в массив массивов. 2 действие - преыращаем массив массивов в обычный объект fromEntries. 3 действие - превращаем все это добро в json

            // fetch('server.php', { // при помощи fetch отправляем данные. ВАЖНО. Особенность fetch - промис который запускается при помощи fetch не перейдет в состояние "Отклонено" или "rejected" из-за ответа http который считается ошибкой (404, 500 и т.д.). Он все равно выполнится нормально, единственное что поменяется это status которое станет false. А будет ошибка связанная с http, если не будет сети
            //     method: "POST",
            //     // body: formData, если данные обычные. Не JSON
            //     body: JSON.stringify(object), // переделываем formData в JSON
            //     headers: {
            //         'Content-type': 'application/json'
            //     }
            // }) старый код. Переписали в ф-ию postData

            postData('http://localhost:3000/requests', json)
            .then(data => { // data - те данные которые мы получаем из промиса, то есть те данные которые нам прислал сервер
                    console.log(data); // ответ, то что получили от запроса
                    showThanksModal(message.success);
                    statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset(); // очищает форму
            })
            
            // так было без fetch (можно удалить)
            // request.addEventListener('load', () => { // возникает при завершении запроса
            //     if (request.status === 200) {
            //         console.log(request.response); // ответ, то что получили от запроса
            //         showThanksModal(message.success);
            //         form.reset(); // очищает форму
            //         statusMessage.remove();
            //     } else {
            //         showThanksModal(message.failure);
            //     }
            // });
        });
    }

    // красивое оповещение пользователя

    function showThanksModal(message) {
        const permModalDialog = document.querySelector('.modal__dialog');

        permModalDialog.classList.add('hide'); // получается мы скрываем изначальный modal__dialog и добавляем такой же, но с другой версткой
        openModal();

        const thanksModal = document.createElement('div'); // обертка
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class="modal__content">
            <div class="modal__close" data-close>×</div>  <!-- Напрминание: data-атрибуты это штукенция позволяющая хранить доп информацию чтоб работать с элементом в js --!>
            <div class="modal__title">${message}</div>
        </div>
        `;

        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            permModalDialog.classList.add('show');
            permModalDialog.classList.remove('hide');
            closeModal();
        }, 4000)
    }

    fetch('http://localhost:3000/menu')
        .then(data => data.json())
        .then(result => console.log(result));

});