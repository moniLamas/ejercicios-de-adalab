'use strict';

const image = document.querySelector('.js_img');

console.log("Antes");

function coverToJs(response) {
    debugger;
    return response.json();
}

function renderToHTML(jsonData) {
    debugger;
    console.log('Llegan los datos', jsonData);
    image.src = jsonData.url;
}

fetch('https://random.dog/woof.json')
    .then(coverToJs)
    .then(renderToHTML);

console.log("Después");