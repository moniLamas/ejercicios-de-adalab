'use strict';

const main = document.querySelector('.js-main');

let tasks = [];

fetch('http://api.igarrido.es/tasks.json')
    .then((response) => response.json())
    .then((jsonData) => {
        tasks = jsonData;
        for (const data of tasks) {
            if (data.completed) {
                const html = `<li><input class="js-input" checked type="checkbox"><label class="completed">${data.name}</label></li>`;
                main.innerHTML += html;
            } else {
                const html = `<li><input class="js-input" type="checkbox"><label>${data.name}</label></li>`;
                main.innerHTML += html;
            }
        }

    });


function render() {


    const allInput = document.querySelectorAll('.js-input');

    for (const eachInput of allInput) {
        eachInput.addEventListener('click', handleClickTask);
    }

}

function handleClickTask(ev) {
    console.log(ev.target.parentNode.querySelector('label'));

    const labelSister = ev.target.parentNode.querySelector('label');
    labelSister.classList.toggle('completed');
}