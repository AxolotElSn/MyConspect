'use strict';

    // api - application programming interface - интерфейс программного обеспечения. Это набор нвддых и возможностей, который предоставляет нам какое-то готовое решение. google maps api - гугл нам предоставляет возможность работать с их картами, к примеру
    // DOM API это различные методы, позволяющие нам работать с элементами на странице document.querySelector(), к примеру
    // тут используется спец ресурс для теста JSONPlaceHolder (просто фейковая апишка для теста)

    // fetch('https://jsonplaceholder.typicode.com/todos/1') // url то, куда мы посылаем запрос. Если больше ничего не указывать, то это будет обычный гет - запрос. fetch использует промисы и возвращает промисы соответственно
    //   .then(response => response.json()) // получаеи какой-то ответ в json формате. response.json() превращает json в обычный js объект, но возвращает промис чтоб можно дальше было построить цепочку
    //   .then(json => console.log(json));

    fetch('https://jsonplaceholder.typicode.com/posts', { // этот объект должен содержать 2 обязательных свойства method и body. Он отвечает за настройки, которые мы будем задавать. И еще мы поменяли адрес в конце на posts
        method: "POST", // вид запроса
        body: JSON.stringify({name: 'Alex'}), // то что мы отправляем. Т. к. работаем с json то сразу перерабатываем объект в json формат
        headers: {
            'Content-type': 'application/json'
        }
    })
      .then(response => response.json())
      .then(json => console.log(json)); // { name: 'Alex', id: 101 } (в этой бд 100 имен, мы запросили имя которого там нет, по этому id 101)