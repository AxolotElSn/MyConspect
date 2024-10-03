'use strict';

let path = require('path'); // Техническая переменная. Нужна для правильной работы

module.exports = { // Объект настроек
  mode: 'development', // Режим в котором работает webpack. Их всего 2. development и production. По умолчанию, если не используем конфиг, стоит production режим. Этот режим работает медленнее, но включает в себя инструменты по оптимизации кода. Режим для конечной сборке продукта, по сути. Режим development, то наш код будет работать быстрее. Этот режим больше подходит для работы
  entry: './src/js/script.js', // Тот файл с которого мы начинаем. Обычно это файл в котором прописываются все require и зависимости. Если сюда нужно записать несколько файлов, то на этом месте нужно создать объект
  output: { // Файл выхода. Тут конфигурируем файл который в итоге получится
    filename: 'bundle.js', // Как файл будет называться
    path: __dirname + '/dist/js' // куда мы его складываем
  },
  watch: true, // Если стоит true, то webpack будет отслеживать изменения в файлах и автоматически собирать проект, когда мы сохраняем какие-нибудь файлы

  devtool: "source-map", // Тут инфа об исходниках. Тут довольно много режимов

  module: {} // модули и их настройка
};