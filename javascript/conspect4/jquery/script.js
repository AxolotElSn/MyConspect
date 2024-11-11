import $ from 'jquery';

// const btn = $('#btn'); // так можно обратиться к элементу
$(document).ready(function() { // это window.addEventListener('DOMContentLoaded', () => {}
    $('.list-item:first').hover(function() { // :first вернет первый элемент
        $(this).toggleClass('active'); // this обратится к самому элементу на которое накидывается событие (напоминалка)
    });

    $('.list-item:eq(2)').on('click', function() { // eq - позволяет указать номер элемента к которому мы обращаемся. on - это addeventlistener
        $('.image:even').fadeToggle('slow'); // even - только четные элементы, fadeToggle() анимация скрытия
    });

    $('.list-item:eq(4)').on('click', function() {
        $('.image:odd').animate({ // odd - нечетные элементы, animate - позволяет сделать кастомную анимацию
            opacity: 'toggle', // прозрачность
            height: 'toggle'
        }, 2000);
    });
});



