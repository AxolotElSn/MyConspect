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

    // getResource('http://localhost:3000/menu')
    //     .then(data => {
    //         data.forEach(({img, altimg, title, descr, price}) => { // перебираем все карточки и отрисовываем их. А так эе используем деструктуризацию объекта
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

    // fetch('http://localhost:3000/menu')
    //     .then(data => data.json())
    //     .then(result => console.log(result));


    // slider
    // простой вариант

    // const slides = document.querySelectorAll('.offer__slide'),
    //       prev = document.querySelector('.offer__slider-prev'), // конопки вперед и
    //       next = document.querySelector('.offer__slider-next'), // назад
    //       total = document.querySelector('#total'), // сколько слайдов всего
    //       current = document.querySelector('#current'); // на каком мы слайде сейчас
    // let slideIndex = 1;

    // showSlides(slideIndex); // для начала нужно записать начальное значене

    // // ставим 0 в начале. Тут сколько слайдов всего
    // if (slides.length < 10) { // не записываем в ф-ию потому что нам нужно просчитать кол-во слайдов один раз
    //     total.textContent = `0${slides.length}`;
    // } else {
    //     total.textContent = slides.length;
    // }

    // function showSlides(n) {
    //     if (n > slides.length) { // если дошли до крайнего слайда, то перемещаемся на первый
    //         slideIndex = 1;
    //     }

    //     if (n < 1) { // наоборот
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(item => item.style.display = 'none');

    //     slides[slideIndex - 1].style.display = 'block'; // показываем нулевой слайд

    //     // ставим 0 в начале. Тут на каком мы слайде сейчас
    //     if (slides.length < 10) { // а это в ф-ии потому что нам нужно просчитывать текущий слайд при каждом нажатии на кнопку прокрутки
    //         current.textContent = `0${slideIndex}`;
    //     } else {
    //         current.textContent = slideIndex;
    //     }
    // }

    // function plusSlides(n) { // отвечает за переключение слайдов
    //     showSlides(slideIndex += n)
    // }

    // prev.addEventListener('click', () => { // переключение назад
    //     plusSlides(-1);
    // });

    // next.addEventListener('click', () => { // переключение вперед
    //     plusSlides(1);
    // });

    // тот же слайдер, но более сложный вариант

    const slides = document.querySelectorAll('.offer__slide'),
          slider = document.querySelector('.offer__slider'), // для того чтоб можно было обратиться и сделать position relative (это весь блок слайда)
          prev = document.querySelector('.offer__slider-prev'), // конопки назад и
          next = document.querySelector('.offer__slider-next'), // вперед
          total = document.querySelector('#total'), // сколько слайдов всего
          current = document.querySelector('#current'), // на каком мы слайде сейчас
          slidesWrapper = document.querySelector('.offer__slider-wrapper'), // общая обертка
          slidesField = document.querySelector('.offer__slider-inner'), // обертка которая для прокрутки
          width = window.getComputedStyle(slidesWrapper).width; // примененные стили от css. получаем ширину

    let slideIndex = 1;
    let offset = 0;

    slidesField.style.width = 100 * slides.length + '%'; // устонавливаем ширтну блока. Умножаем кол-во слайдов на 100%. В нашем случае он будет занимать 400%
    slidesField.style.display = "flex";
	slidesField.style.transition = "0.5s all";

    slidesWrapper.style.overflow = 'hidden'; // скрываем элементы которые не попадают в область видимости

    slides.forEach(slide => { // делаем все слайды одной ширины
        slide.style.width = width;
    });

    slider.style.position = 'relative';
    const indicators = document.createElement('ol'), // большая обертка для наших точек (список)
          dots = [];
    indicators.classList.add('carousel-indicators');
    indicators.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    slider.append(indicators);

    for (let i = 0; i < slides.length; i++) { // делаем точки для каждого слайда
        const dot = document.createElement('li'); // делаем list item
        dot.setAttribute('data-slide-to', i + 1); // делаем атрибуты точкам нумеруя начиная с 1
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if (i == 0) {
            dot.style.opacity = 1; // делаем точку не прозрачной
        }
        indicators.append(dot);
        dots.push(dot); // помещаем точку в массив
    }

    function deleteNotDigits (str) {
        return +str.replace(/\D/g, '');
    }

    function styleDots (dot, index) { // делаем у текущего слайда не прозрачную точку. (-1 потому что на странице у нас нумерация начинается с 1, а в js с 0)
        dot.forEach(dot => dot.style.opacity = '.5');
        dot[index - 1].style.opacity = 1;
    }

    function Zero(slides, cur, index) { // ставим 0 в начале если число конкретного слайда меньше 10
        if (slides.length < 10) {
            cur.textContent = `0${index}`;
        } else {
            cur.textContent = index;
        }
    }

    function Offset (wrapper, offset) { // перемещаем элемент по оси x. Минус используется потому что если элемент двигается влево то мы используем отрицательное значение, если вправо, то положительное. При нажатии на кнопки элементы прокручиваются справа на лево
        wrapper.style.transform = `translateX(-${offset}px)`;
    }

    if (slides.length < 10) { // ставим 0 в начале числа если оно менише 10 в общем количестве слайдов
        total.textContent = `0${slides.length}`; 
        current.textContent = `0${slideIndex}`;
    } else {
        total.textContent = slides.length;
        current.textContent = slideIndex;
    }

    next.addEventListener('click', () => {
        if (offset == deleteNotDigits(width) * (slides.length - 1)) { // slice() убирает px из ширины блока (заменено на регулярное выражение). Это для того чтоб мы работали с числом а не строкой. -1 как я понял нужен потому что у нас и так всегда 1 слайд отрисовывается, остается 3 прокручивать. А без минуса прокрутит 4 раза
            offset = 0; // проверка на последний слайд. То есть если offset равен ширине когда в блоке последний слайд, мы offset присваиваем 0 - иначе говоря перемещаемся на первай слайд
        } else {
            offset += deleteNotDigits(width); // иначе при каждом нажатии на кнопку прибавляем offset ширину слайда
        }

        Offset(slidesField, offset);

        if(slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        Zero(slides, current, slideIndex);

        styleDots(dots, slideIndex);
    });

    prev.addEventListener('click', () => {
        if (offset == 0) { // Ну а тут наоборот. Если offset = 0, и мы нажимаем на кнопку, то offset становится равным той ширине при которой у нас отрисовывается последний слайд. То есть мы перемещаемся на последний слайд
            offset = deleteNotDigits(width) * (slides.length - 1);
        } else { // иначе отнимаем каждый раз ширину одного слайда
            offset -= deleteNotDigits(width);
        }

        Offset(slidesField, offset);
    
        if(slideIndex == 1) { 
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        Zero(slides, current, slideIndex);

        styleDots(dots, slideIndex);
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = deleteNotDigits(width) * (slideTo - 1);

            Offset(slidesField, offset);

            Zero(slides, current, slideIndex);

            styleDots(dots, slideIndex);
        })
    })

    // Calc

    const result = document.querySelector('.calculating__result span');

    let sex, height, weight, age, ratio // пол рост вес возраст коэф. атив.

    if (localStorage.getItem('sex')) { // проверяес, если в хранилище есть запись, то старим ее. Если нет, то ставим стандартное значение и записываем его в хранилище
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if (localStorage.getItem('ratio')) {
        ratio = localStorage.getItem('ratio');
    } else {
        ratio = 1.375;
        localStorage.setItem('ratio', 1.375)
    }

    function calcTotal() { // подсчет
        if (!sex || !height || !weight || !age || !ratio) { // проверка на то что все поля заполнены 
            result.textContent = '____';
            return; // return нужен чтоб досрочно прервать нашу ф-ию
        }

        if (sex === 'female') { // формула в зависимости от пола
            result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio) // Math.round - округление до ближайшего целого
        } else {
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio)
        }


    }

    calcTotal();

    function initLocalSettings (selector, activeClass) { // эта ф-ия срабатывает 1 раз при загрузке страницы. Она сверяет данные с localStorage и ставит классы акивности (ну то есть делает кнопки зелеными), в соответствии с данными на localStorage. Так же эта ф-ия работает сразу для 2ух блоков. Для пола и активности
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => { // получается так. Перебираем элементы и удаляем всем классы активности. Потом, если мы находим элемент, совпадающий с localStorage, то присваиваем ему класс активности
            elem.classList.remove(activeClass);
            if (elem.getAttribute('id') === localStorage.getItem('sex')){
                elem.classList.add(activeClass);
            }
            if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
                elem.classList.add(activeClass);
            }
        });
    }

    initLocalSettings('#gender div', 'calculating__choose-item_active'); // для пола. #gender div. Div нужен, потому что обращаемся ко всем блокам этого селектора
    initLocalSettings('.calculating__choose_big div', 'calculating__choose-item_active'); // для активности


    function getStaticInformation(selector, activeClass) { // чтоб зеленым выделялся
        // const elements = document.querySelectorAll(`${parentSelector} div`) // получаем все дивы внктри родителя (такая запись для того чтоб можно было ф-ию вызвать 2 рпзп для разных классов. То есть для блока с выбором рола и блока с выбором активности)
        const elements = document.querySelectorAll(selector);

        elements.forEach(elem => {
            elem.addEventListener('click', (e) => { // получается мы накидываем событие родителя с нашими дивами (Делегирование событий)
                if (e.target.getAttribute('data-ratio')) { // если атрибут присутствует у объекта события
                    ratio = +e.target.getAttribute('data-ratio') // то сюда записываем ту активность которая стояла в этом атрибуте
                    localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
                } else { // ну а если нет, то значит мы кликаем на кнопну с выбором пола (в html - у нас дата атрибуты стоят на дневной активности, а id на выборе пола)
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id')); // записываем эти данные в localstorage, чтоб при перезагрузке страницы они сохранялись
                }
    
    
                elements.forEach(elem => { // убираем у всех элементов активный класс
                    elem.classList.remove(activeClass)
                });
                
                // console.log(e.target) // напоминание что такое e.target - <div data-ratio="'1.55" id="medium" class="calculating__choose-item calculating__choose-item_active">Умеренная активность</div>
                
                e.target.classList.add(activeClass) // ну а тут добавляем активный класс на элемент на котрый мы кликнули
    
                calcTotal();
            });
        })

    }

    getStaticInformation('#gender div', 'calculating__choose-item_active'); // вызов ф-ии для блока с полом
    getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active'); //  вызов ф-ии для блока с дневной активностью

    function getDynamicInformation(selector) { // обработка значений (рост, вес, возраст)
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {
            
        if(input.value.match(/\D/g)) { // если есть не число, то обводим красным
            input.style.border = '1px solid red';
        } else {
            input.style.border = 'none';
        }

            switch(input.getAttribute('id')) {
                case 'height': // если вводим данные в блок роста
                    height = +input.value // то записываем в рост то что написали в блок (input - наш блок, value - то что записано в блоке)
                    break;
                case 'weight':
                    weight = +input.value
                    break;
                case 'age':
                    age = +input.value
                    break;
            }
            calcTotal();
        });
    }

    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');

});