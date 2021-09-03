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

    if (data.completed) {
        const html = `<li class = "completed"><input checked type='checkbox'><label>${data.name}</label></li>`;
        main.innerHTML += html;
    } else {
        const html = `<li><input type="checkbox"><label>${data.name}</label></li>`;
        main.innerHTML += html;
    }
}