//события на мобильных устройствах

// touchstart - событие срабатывает когда мы касаемся элемента
// touchmove - событие срабатывает когда мы двигаем пальцем по элементу
// touchend - событие срабатывает когда мы перестали касаться элемента

// touchenter - событие срабатывает когда мы просто ведем пальцем пор экрану и наскакиваем на элемент
// touchleave - событие срабатывает когда мы перестали касаться элемента, не отрывая палец от экрана
// touchcancel - событие срабатывает когда палец вышел за пределы браузера

window.addEventListener('DOMContentLoaded', ()=> { // это делает так что код будет работать только после полной прогрузки
    const box = document.querySelector('.box');

    box.addEventListener("touchstart", (e) => {
        e.preventDefault();

        console.log("Start");
        console.log(e.touches);
        console.log(e.targetTouches);
    });

    box.addEventListener("touchmove", (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
    });

    box.addEventListener("touchend", (e) => {
        e.preventDefault();

        console.log("End");
        console.log(e.changedTouches);
    });
});

// touches - свойство выдает список всех пальцев которые взаимодействуют с экраном
// targetTouches - свойство выдает список всех пальцев которые взаимодействуют с конкретным элементом
// changedTouches - список пальцев участвующие только в событии