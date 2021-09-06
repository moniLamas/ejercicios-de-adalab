'use strict';

const allInput = document.querySelector('.js_input');

function handleKeyUp() {
    const data = {};

    for (const eachInput of allInput) {
        const id = eachInput.id;
        const value = eachInput.value;

        data[id] = value; // Se crea el objeto data con los datos introducidos en el formulario. const data = {name: 'Yanelis', lastname: '', address:'', ...}

        localStorage.setItem('data', JSON.stringify(data)); // Guardamos en local los datos del objeto, en formato JSON en texto
    }
}

for (const eachInput of allInput) {
    eachInput.addEventListener('keyup', handleKeyUp);
}

//Cuando cargue la página, está en formato texto

const initialDataText = localStorage.getItem('data');

if (initialDataText !== null) {
    const initialData = JSON.parse(initialDataText); //lo pasa a objeto apto para JS

    for (const id in initialData) {
        console.log(id);
    }
}