'use strict';

const showMsg = () => {
    const msg = document.querySelector('.msg');
    msg.innerHTML = 'Su sesión ha expirado';
};

setTimeout(showMsg, 6000);