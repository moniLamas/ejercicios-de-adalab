'use strict';

// debugger;


const button = document.querySelector('.js-btn');
const name = document.querySelector('.name');

button.addEventListener('click', () => console.log('Hola ${name}'));

