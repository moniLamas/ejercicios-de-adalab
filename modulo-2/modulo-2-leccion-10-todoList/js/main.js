'use strict';

const main = document.querySelector('.js-main');

let tasks = [];

fetch('http://api.igarrido.es/tasks.json')
    .then((response) => response.json())
    .then((jsonData) => {
        tasks = jsonData;

        render();
    });


function render() {
    main.innerHTML = '';
    for (let index = 0; index < tasks.length; index++) {
        const data = tasks[index];

        if (data.completed) {
            const html = `<li><input id="${index}" class="js-input" checked type="checkbox"><label class="completed" id="${index}">${data.name}</label></li>`;
            main.innerHTML += html;
        } else {
            const html = `<li><input id="${index}" class="js-input" type="checkbox"><label id="${index}">${data.name}</label></li>`;
            main.innerHTML += html;
        }
    }

    const allInput = document.querySelectorAll('.js-input');

    for (const eachInput of allInput) {
        eachInput.addEventListener('click', handleClickTask);
    }

}

function handleClickTask(ev) {
    const indexToChange = ev.target.id;

    if (tasks[indexToChange].completed === true) {
        tasks[indexToChange].completed = false;
    } else {
        tasks[indexToChange].completed = true;
    }
    console.log(tasks);
    render();
}