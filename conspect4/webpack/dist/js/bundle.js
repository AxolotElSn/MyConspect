/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((module) => {

// Нужно сделать так чтоб этой ф-ией можно было пользоваться из другого файла

function myModule() {
    this.hello = function() {
        console.log('hello');
    };

    this.goodbye = function() {
        console.log('bye!'); 
    };
}

module.exports = myModule; // module - это такой объект, exports - свойство. Туда помещаем то, что хотим экспортировать




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
// require — это функция, которая используется для импорта модулей, файлов или библиотек в текущий файл. С ее помощью можно подключать внешние модули и использовать их в коде.
const myModule = __webpack_require__(/*! ./main */ "./src/js/main.js"); // .js писать не надо. При сборке сборщик поймет сам 

const myModuleInstance = new myModule();

myModuleInstance.hello(); // hello
myModuleInstance.goodbye(); // bye!

// Важно! Браузер не умеет самостоятельно собирать модули. По этому нам нужен сборщик
// npm install webpack webpack-cli --save-dev 

// Если использовать стандартные напстройки webpack, то нужно соблюдать некоторые устовия. Главный файл который принемает в себя все импорты должен называться index.js и находиться в папке src. То есть нельзя чтоб этот файл распологался например src/js/index.js будет ошибка. При успехе у нас появляется папка dist в которой появляется файл main.js. Там сформируется определенная модульная структура. То есть там те самые наши анонимные самовызывающиеся ф-ии. Короче это наши все файлы в одном

// Но в реальных проектах мы пользуемся конфигами. Тут мы можем настроить нашу индивидуальную сборку

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map