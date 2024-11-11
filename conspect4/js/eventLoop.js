'use strict';

// console.log(1);

// setTimeout(() => {
//     console.log('timeout 2 sec')
// }, 2000);

// setTimeout(() => {
//     console.log('timeout 4 sec')
// }, 4000);

// console.log(2);
//1 2 timeout 2 sec timeout 4 sec

// Для наглядности мы пользуемся сервисом latentflip. У нас есть Call Stack, Web Apis и Callback Queue. В Call Stack при запуске попадает код который выполняется на данный момент. Web Apis это специальное браузерное хранилище где мы храним промежуточные данные. Callback Queue это очередь наших операций, т. к. параллельно они выполняться не могут. Соответственно сюда приходят различные события/ф-ии и становятся в очередь

// То есть если у нас, к примеру, есть несколько таймеров которые выполняются одновременно. После каждого выполнения таймера, итог попадает в Callback Queue и ждет своей очереди. Потом попадает в Call Stack. А таймер на момент выполнения отсчета находится в Web Apis

// К примеру, если в Call Stack попадет бесконечный цикл, или что-то подобное, то Callback Queue будет забиваться и через время крашнется


// let k = 0;

// function count() {
//     for (let i = 0; i < 1e9; i++){ // 1e9 = 1 с 9 нулями
//         k++; // пока эта задача не выполнится, мы не сможем делать что-либо на странице (иначе говоря она долго обрабатывает какие-то данные в Call Stack)
//     }
//     alert('done');
// }

// count();

setTimeout(() => {
    console.log(1);
}, 0); // И еще очень важно. Сам js когда видит тут 0, автоматически ставит туда 4 милисекунды. Это сделанно для совместимости в разных браузерах

console.log(2);
// 2 1 Потому что все равно есть асинхронная операция, несмотря на то что задержка таймера = 0. Все равно таймер сначала попадет в Web Apis, а только потом в очередь и в стек. А не асинхронная операция сразу в очередь и стек, по этому выполнится быстрее
