'use strict';

let counter = 0;

const incrementAndShowCounter = () => {
    counter++;
    const time = document.querySelector('.time');
    time.innerHTML = counter;
};

setInterval(incrementAndShowCounter, 1000);

const removeMsg = () => {
    const msg = document.querySelector('.msg');
    msg.innerHTML = '';
};

setTimeout(removeMsg, 6000);

let counter2 = 0;
let temp;

const incrementAndShowCounter = () => {
    counter2++;
    const time = document.querySelector('.time');
    time.innerHTML = counter2;
    if (counter2 === 10) {
        clearInterval(temp);
    }
};

temp = setInterval(incrementAndShowCounter, 1000);