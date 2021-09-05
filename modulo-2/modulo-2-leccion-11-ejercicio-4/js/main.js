'use strict';

const yourName = document.querySelector('.js_text');
const blockName = document.querySelector('.js_name');

function getYourName() {
    let name = yourName.value;
    console.log(name);
    blockName.innerHTML = `Guardamos ${name} como tu nombre`;

    localStorage.setItem('name', JSON.stringify(yourName));
}

const savedName = JSON.parse(localStorage.getItem('name'));

yourName.addEventListener('keyUp', getYourName);