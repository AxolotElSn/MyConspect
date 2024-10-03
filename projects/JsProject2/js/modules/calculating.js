function calc() {
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

}

module.exports = calc;