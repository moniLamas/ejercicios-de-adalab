'use strict';

const message = document.querySelector('.js_message');

if (message.classList.contains('error')) {
    message.classList.remove('successe');
    message.classList.remove('warning');
    message.innerHTML = 'ERROR';
} else if (message.classList.contains('warning')) {
    message.classList.remove('successe');
    message.classList.remove('error');
    message.innerHTML = 'WARNING';

} else {
    message.classList.add('successe');
    message.innerHTML = 'SUCCESSE';
}