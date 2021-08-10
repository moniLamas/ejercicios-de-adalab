'use strict';



function getEl (selector) {
    const elemento = document.querySelector(selector);
    return elemento;
}

const btnEl = getEl('.hello');
console.log(btnEl);

