'use strict';

let counter = 0;

const incrementAndShowCounter = () => {
    const time = document.querySelector('.time');
    counter++;
    if (counter < 59) {
        time.innerHTML = `${counter} segundos`;
    } else if (counter >= 60) {
        time.innerHTML = `1 minuto`;
    }
};

setInterval(incrementAndShowCounter, 1000);