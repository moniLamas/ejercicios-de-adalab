'use strict';

const main = document.querySelector('.js-main');

/*
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
*/


fetch('http://api.igarrido.es/tasks.json')
    .then(response => response.json())
    .then((tasks) => {
        for (const data of tasks) {

            if (data.completed) {
                const html = `<li class = "completed">${data.name}</li>`;
                main.innerHTML += html;
            } else {
                const html = `<li>${data.name}</li>`;
                main.innerHTML += html;
            }
        }

    });