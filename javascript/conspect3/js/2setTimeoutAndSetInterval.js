// const timerId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'hi');


// const btn = document.querySelector('.btn');
// let timer2, // объявляем переменную зараннее, важно
//     i = 0;

// btn.addEventListener('click', () => {
//     // const timer2 = setTimeout(logger, 2000); // сработат через 2 чекунды после нажатия на кнопку
//     timer2 = setInterval(logger, 2000); // будет срабатывать каждые 2 секунды после одного нажатия на кнопку
// });

// function logger () {
//     if (i === 3) {
//         clearInterval(timer2);
//     }
//     console.log('ahaha');
//     i++;
// }

// // тут мы запускаем первый сет таймаут чеоез пол секунды выполнится ф-ия, в ней выполняется действие (console.log()), и следующий сет таймаут выполнится только через пол секунды и не важно сколько будет выполняться ф-ия
// let id = setTimeout(function log() { // лучше использовать рекурсию, т. к. setInterval не учитывает время выполнения функции. И если ф-ия будет сложная - долговыполнимая, то после ее исполнения, setInterval, не будет заново выжидать то время, которое он должен дать между выполнением ф-ий
//     console.log('bebe');
//     id = setTimeout(log, 500);
// }, 500);


///


const btn = document.querySelector('.btn');

function myAnimation() {
    const element = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10); // анимация 
    function frame() {
        if (pos == 300) { // 300 потому что 400 px это большой квадрат - 100 px это двтжущтйся квадрат 
            clearInterval(id);
        } else {
            pos++;
            element.style.top = pos + "px";
            element.style.left = pos + "px";
        }
    }
}

btn.addEventListener('click', myAnimation);
