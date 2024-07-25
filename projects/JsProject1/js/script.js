/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () =>{ // это делает так что код будет работать только после полной прогрузки
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addFoarm = document.querySelector('form.add'),
          addInput = addFoarm.querySelector('.adding__input'),
          checkbox = addFoarm.querySelector('[type="checkbox"]'); // [] - это обозначение html атрибутов

    
    addFoarm.addEventListener('submit', (event) => { // submit - событие которое происходит при отправке формы (нажимает на кнопку например) / event - объект содержащий информацию об элементе
        event.preventDefault(); // отмена стандартного поведения браузера. В нашем случае event - это объект события который передается в ф-ию при возникновении события submit. С его помощью мы отменяем стандартное поведение браузера тут

        let newFilm = addInput.value; // value - это то что мы вводим в форму
        const favotite = checkbox.checked; // тут проверяем стоит ли галочка

        if(newFilm) {

            if(newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if(favotite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);
        }    

        event.target.reset();
    });


    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    
    const makeChanges = () => {
        genre.textContent = 'Драмма';
    
        poster.style.backgroundImage = 'url("../img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };


    function createMovieList(films, parent){
        parent.innerHTML = ""; // так можно удобно отчистить элемент
        sortArr(films);
        
        films.forEach((film, i) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove(); // parentElement - родительский элемент
                movieDB.movies.splice(i, 1); // splise - метод вырезает элемент. сначала помещаем номер который надо удалить, потом сколькл элементов удалить

                createMovieList(films, parent); // рекурсия помогает пересобрать массив заново что позволяет делать правильную умерацию после удаления элмента
            });
        });
    }



    makeChanges();
    deleteAdv(adv);
    createMovieList(movieDB.movies, movieList);
    
});