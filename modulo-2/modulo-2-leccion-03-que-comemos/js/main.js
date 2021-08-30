'use strict';

// Traer elemenos del HTML

const entrada1 = document.querySelector('.js_entrada_1');
const entrada2 = document.querySelector('.js_entrada_2');
const salida = document.querySelector('.js_salida');

const alimento1 = entrada1.innerHTML;
const alimento2 = entrada2.innerHTML;

if (alimento1 === 'Tomate') {

    if (alimento2 === 'Pan') {
        salida.innerHTML = 'Hoy comemos pa amb tumàquet';
    } else if (alimento2 === 'Pepino' || alimento2 === 'Pimiento' || alimento2 === 'Cebolla') {
        salida.innerHTML = 'Hoy comemos gazpacho';
    } else if (alimento2 === 'Pasta') {
        salida.innerHTML = 'Hoy comemos espaguetis';
    } else {
        salida.innerHTML = 'Hoy comemos ensalada';
    }

} else {
    salida.innerHTML = 'Hoy no comemos';
}

let numero = 25;

if (numero % 2 === 1) {
    console.log(`El ${numero} es impar`);

} else {
    console.log(`El ${numero} es par`);
}