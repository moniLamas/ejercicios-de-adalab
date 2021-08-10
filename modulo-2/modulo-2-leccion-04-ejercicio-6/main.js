'use strict';

debugger;

function getEl (selector) {
    const elemento = document.querySelector(selector);
    if (!elemento) {
        console.error(`No existe ningún elemento con clase, id o tag llamado ${selector}`)
    }
    return elemento;
}

const btnEl = getEl('hello');
console.log(btnEl);

