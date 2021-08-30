'use strict';

const message = document.querySelector('.js_message');
const title = document.querySelector('.js_title');
const text = document.querySelector('.js_text');

if (message.classList.contains('error')) {
    title.innerHTML = 'ERROR';
    text.innerHTML = 'Ha surgido un error';

} else if (message.classList.contains('warning')) {
    title.innerHTML = 'WARNING';
    text.innerHTML = 'Tenga cuidado';

} else {
    title.innerHTML = 'SUCCESSE';
    text.innerHTML = 'Los datos son correctos';
}