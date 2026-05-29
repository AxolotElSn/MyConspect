'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let film1 = prompt('Один из просмотренных фильмов');
let score1 = +prompt('На сколько оцените его?');

let film2 = prompt('Один из просмотренных фильмов');
let score2 = +prompt('На сколько оцените его?');

personalMovieDB.movies[film1] = score1;
personalMovieDB.movies[film2] = score2;

console.log(personalMovieDB)
console.log(personalMovieDB.movies)