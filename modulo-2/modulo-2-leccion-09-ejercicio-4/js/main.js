'use strict';

const main = document.querySelector('.js-main');

const tasks = [{
        name: 'Recoger setas en el campo',
        completed: true
    },
    {
        name: 'Comprar pilas',
        completed: true
    },
    {
        name: 'Poner una lavadora de blancos',
        completed: true
    },
    {
        name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
        completed: false
    }
];

for (const data of tasks) {
    let html = `<li>${data.name}</li>`;
    main.html += html;
}