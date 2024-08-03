const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];


function setFilmsIds(arr) {
    return arr.map((film, i) => {
        film.id = i;
        return film;
    })
}

const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
    return arr.every((i) => i.id || i.id === 0)
}

console.log(checkFilms(tranformedArray))