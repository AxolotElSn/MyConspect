"use strict";

const p = document.querySelectorAll('p');
console.log(p);

// const script = document.createElement('script'); // динамически загружаемый скрипт ведет себя как async
// script.src = "js/test/test.js";
// // script.async = false; // если надош убрать async со скрипта
// document.body.append(script);

function loadScript(src) {
    const script = document.createElement('script'); // динамически загружаемый скрипт ведет себя как async
    script.src = src;
    script.async = false; // если надо убрать async со скрипта
    document.body.append(script);
}

loadScript("../js/test/test.js");
loadScript("../js/test/some.js");