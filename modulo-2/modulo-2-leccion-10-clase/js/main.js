'use strict';

const image = document.querySelector('.js_img');

fetch('https://random.dog/woof.json')
    .then(coverToJs)
    .then(renderToHTML);