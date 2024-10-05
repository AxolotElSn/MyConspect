function openModal(modalSecector, modalTimerId) {
    const modal = document.querySelector(modalSecector); // получаем элемент с которым работаеи ф-ия 
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    console.log(modalTimerId);
    if (modalTimerId) { // если есть modalTimerId, тогда останавливанм таймер
        clearInterval(modalTimerId);
    }
}    

function closeModal(modalSecector) {
    const modal = document.querySelector(modalSecector);
    // modal.classList.add('hide');
    // modal.classList.remove('show');

    modal.classList.toggle('hide');
    document.body.style.overflow = '';
}

function modalWindow(triggerSelector, modalSecector, modalTimerId) { // делаем аргументы для того чтоб модуль стал блоее универсальным
     //modal-window

    const modalTrigger = document.querySelectorAll(triggerSelector),
          modal = document.querySelector(modalSecector);

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSecector, modalTimerId)); // ф-ия openModal не должна сразу вызываться. По этому перед ее вызовом мы прописываем ф-ию
    });

    modal.addEventListener('click', (e) => { // окно закроется при клике на крестик
        if (e.target === modal || e.target.getAttribute('data-close') == '') { // если есть дата атрибут data-close на элементе и мы на него кликаем, то закрываем окно (этот атрибут есть на крестике). Это сделали ля того чтоб событие работало на динамически созданных элементах
            closeModal(modalSecector);
        }
    });

    document.addEventListener('keydown', (e) => { // окно закроется при клике на esc
        if (e.code == "Escape" && modal.classList.contains('show')){
            closeModal(modalSecector);
        }
    });

    function showModalByScroll() {
        if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) { // -1 ставить надо из-за бага. На некоторых мониторах может не открыться модальное окно
            openModal(modalSecector, modalTimerId); // window.scrollY - высотра прокрутки скрола, document.documentElement.clientHeight - высота нашего экрана, document.documentElement.scrollHeight - высота всего скрола на странице. Таким образом когда сумма высоты нашего экрана и высоты прокрута скрола совпадает с всей длинной скрола - это значит что мы докрутили до конца страницы
            window.removeEventListener('scroll', showModalByScroll) // это для того чтоб окно не вызывалось пр каждом прокруте до конца
        }
    }

    window.addEventListener('scroll', showModalByScroll);

}

export default modalWindow;
export {closeModal}; // делаем отдельные экспорты ф-ий
export {openModal};