function slider ({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, filed}) {
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

    const slides = document.querySelectorAll(slide),
          slider = document.querySelector(container), // для того чтоб можно было обратиться и сделать position relative (это весь блок слайда)
          prev = document.querySelector(prevArrow), // конопки назад и
          next = document.querySelector(nextArrow), // вперед
          total = document.querySelector(totalCounter), // сколько слайдов всего
          current = document.querySelector(currentCounter), // на каком мы слайде сейчас
          slidesWrapper = document.querySelector(wrapper), // общая обертка
          slidesField = document.querySelector(filed), // обертка которая для прокрутки
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
}

export default slider;