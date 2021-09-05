'use strict';

const image = document.querySelector('.js-image');

console.log('Antes');

function convertToJs(response) {
    return response.json();
}

function renderToHTML(jsonData) {
    console.log('Llegan los datos', jsonData);
    image.src = jsonData.url;
}

fetch('https://random.dog/woof.json')
    .then(convertToJs)
    .then(renderToHTML);

console.log('Después');