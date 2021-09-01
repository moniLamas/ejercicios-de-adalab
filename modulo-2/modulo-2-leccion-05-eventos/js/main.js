'use strict';
const elemSaludo = document.querySelector('.js_saludo');

function saludar(nombre) {
    elemSaludo.innerHTML += `<p>Hola ${nombre}</p>`;
}


//Variables
const inputName = document.querySelector('.js_name');
const inputLastname = document.querySelector('.js_lastname');
const elemResultado = document.querySelector('.js_result');

//Funciones
function cogerNombre() {
    const name = inputName.value;
    return name;
}

function cogerApellido() {
    return inputLastname.value;
}

function formarNombreCompleto(nombre, apellido) {
    const nombreCompleto = `${nombre} ${apellido}`;
    return nombreCompleto;
}

function escribirNombreCompleto() {
    elemResultado.innerHTML = nombreCompleto;
}

//Operaciones

const nombre = cogerNombre();
const apellido = cogerApellido();
const nombreCompleto = formarNombreCompleto(nombre, apellido);
escribirNombreCompleto(nombreCompleto);