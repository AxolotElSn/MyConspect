'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('error')
}

console.log(personalMovieDB);
console.log(personalMovieDB.movies);