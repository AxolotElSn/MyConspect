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
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]');

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

    modalCloseBtn.addEventListener('click', closeModal)

    modal.addEventListener('click', (e) => { // окно закроется при клике на крестик
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => { // окно закроется при клике на esc
        if (e.code == "Escape" && modal.classList.contains('show')){
            closeModal();
        }
    });

    // const modalTimerId = setTimeout(openModal, 5000);

    function showModalByScroll() {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) { // -1 ставить надо из-за бага. На некоторых мониторах может не открыться модальное окно
            openModal(); // window.scrollY - высотра прокрутки скрола, document.documentElement.clientHeight - высота нашего экрана, document.documentElement.scrollHeight - высота всего скрола на странице. Таким образом когда сумма высоты нашего экрана и высоты прокрута скрола совпадает с всей длинной скрола - это значит что мы докрутили до конца страницы
            window.removeEventListener('scroll', showModalByScroll) // это для того чтоб окно не вызывалось пр каждом прокруте до конца
        }
    }

    window.addEventListener('scroll', showModalByScroll);


    // используем классы для карточек

    class MenuCard {
        constructor(src, alt, title, descr, prise, parentSelector) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.prise = prise;
            this.parent = document.querySelector(parentSelector); // то куда мы пушим наш элемент
            this.transfer = 27;
            this.cangeToUAH();
        }

        cangeToUAH() {
            this.prise = this.prise * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            element.innerHTML = `
                <div class="menu__item">
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.prise}</span> грн/день</div>
                    </div>
                </div>
            `;
            this.parent.append(element); // в конец родителя ставим наш элемент
        }
    }

    // const div = new MenuCard();
    // div.render();

    new MenuCard( // получается записываем в том порядке в каком у нас записаны свойства в конструкторе
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9, // это доллар
        '.menu .container' // родитель, куда вставляем элемент
    ).render(); // можно записать так, но так можно только если нам нужно использовать этот объект только тут

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        20,
        '.menu .container'
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        16,
        '.menu .container'
    ).render();

});