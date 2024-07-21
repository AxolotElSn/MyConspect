function calcOrDouble(number, basis = 2) { // ну а сейчас можно просто значение по умолчанию писать сразу
    // basis = basis || 2; // так делали раньше. То есть если basis не задан, то подставится 2 по умолчанию
    console.log(number * basis);
}


calcOrDouble(3);