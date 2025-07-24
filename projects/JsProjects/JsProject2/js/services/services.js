const postData = async (url, data) => { // ф-ия настраиыает наш запрос, посылает его на сервер и получает ответ и трансформирует его в json
    const res = await fetch(url, { // если этого не сделать, то пока не придет результат в переменной res будет ничего и из-за этого будет ошиька. Нам необходимо дождаться результата запроса и по этому мы ставим await
        method: "POST",
        body: data,
        headers: {
            'Content-type': 'application/json'
        }
    });

    return await res.json(); // мы не знаем сколько времени нам понадобится на перевод в обычный объект. По этому тоже ставим await
};

const getResource = async (url) => { // ф-ия настраиыает наш запрос, посылает его на сервер и получает ответ и трансформирует его в json
    const res = await fetch(url);

    if(!res.ok){ // проверка на ошибки. Делаем потому что fetch не возвращает catch в случае ошибки
        throw new Error(`Could not fetch ${url}, status ${res.status}`); // throw - это те ошибки которые пишутся нам в консоль. Error() - объект ошибок
    }

    return await res.json();
};

export {postData};
export {getResource};