'use strict';

let counter = 0;

const incrementAndShowCounter = () => {
    if (counter < 14) {
        counter++;
        const time = document.querySelector('.time');
        time.innerHTML = counter;
    } else if (counter >= 15) {
        clearInterval(temp);
    }
};

temp = setInterval(incrementAndShowCounter, 1000);