'use strict';

const message = document.querySelector('.js_message');
const title = document.querySelector('.js_title');
const text = document.querySelector('.js_text');

if (message.classList.contains('error')) {
    message.classList.remove('successe');
    message.classList.remove('warning');
    title.innerHTML = 'ERROR';
    text.innerHTML = 'Ha surgido un error';

} else if (message.classList.contains('warning')) {
    message.classList.remove('successe');
    message.classList.remove('error');
    title.innerHTML = 'WARNING';
    text.innerHTML = 'Tenga cuidado';

} else {
    // message.classList.remove('error');
    // message.classList.remove('warning');
    // message.classList.add('successe');

    title.innerHTML = 'SUCCESSE';
    text.innerHTML = 'Los datos son correctos';
}