'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const film = prompt('Один из просмотренных фильмов', ''),
            score = prompt('На сколько оцените его?', '');
        if (film != null && score != null && film != '' && score != '' && film.length < 50) {
            personalMovieDB.movies[film] = score;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }

    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('error')
    }
}

function showMyDb(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDb(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let favouriteGenres = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = favouriteGenres;
        // personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`); так тоже можно
    }
}

writeYourGenres();


console.log(personalMovieDB.movies);
