'use strict';

const container = document.querySelector('.container');
const faceElement = document.querySelector('.js_face');
const selectElement = document.querySelector('.js_select');
const update = document.querySelector('.js_update');

function randomNumber() {
    let number = Math.round(Math.random() * 100);
    return number;
}



function handlerUpdate() {
    faceElement.innerHTML = selectElement.value;
    if (randomNumber() % 2 === 0) {
        container.classList.remove('backgroundOrange');
        container.classList.add('backgroundYellow');
    } else {
        container.classList.remove('backgroundYellow');
        container.classList.add('backgroundOrange');
    }
}

update.addEventListener('click', handlerUpdate);