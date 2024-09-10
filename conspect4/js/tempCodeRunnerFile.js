fetch('https://jsonplaceholder.typicode.com/posts', { // этот объект должен содержать 2 обязательных свойства method и body. Он отвечает за настройки, которые мы будем задавать. И еще мы поменяли адрес в конце на posts
        method: "POST", // вид запроса
        body: JSON.stringify({name: 'Alex'}), // то что мы отправляем. Т. к. работаем с json то сразу перерабатываем объект в json формат
        headers: {
            'Content-type': 'application/json'
        }
    })
      .then(response => response.json())
      .then(json => console.log(json));
      