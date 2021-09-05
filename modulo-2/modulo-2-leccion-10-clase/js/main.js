'use strict';

const image = document.querySelector('.js_img');

console.log("Antes");

function coverToJs() {
    debugger;
    return Response.json();
}

function renderToHTML() {
    debugger;
    console.log(jsonData);
    image.src = jsonData.url;
}

fetch('https://random.dog/woof.json')
    .then(coverToJs)
    .then(renderToHTML);