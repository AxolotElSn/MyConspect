import {closeModal, openModal} from './modalWindow'; // импортируем те ф-ии из модальных окон
import {postData} from '../services/services';

function forms(formSelector ,modalTimerId) {
    // Forms

    const forms = document.querySelectorAll(formSelector);

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо, скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так'
    }

    forms.forEach (item => {
        bindPostData(item);
    });

    // async - говорит о том что в ф-ии будет какой-то асинхронный код
    // await - дожидается результата и тоько потом позволяет коду идти дальше
    // async и await всегда действуют в паре. Нельзя записать что-то одно

    // postData в сервисах

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


            // XMLHttpRequest – это встроенный в браузер объект, который даёт возможность делать HTTP-запросы к серверу без перезагрузки страницы.


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
        openModal('.modal', modalTimerId);

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
            closeModal('.modal');
        }, 4000)
    }

    // fetch('http://localhost:3000/menu')
    //     .then(data => data.json())
    //     .then(result => console.log(result));

}

// forms.js
export default forms;
