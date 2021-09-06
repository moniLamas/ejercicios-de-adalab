'use strict';

const allInput = document.querySelector('.js_input');

function handleKeyUp() {
    const data = {};

    for (const eachInput of allInput) {
        const id = eachInput.id;
        const value = eachInput.value;

        data[id] = value;
    }
}

for (const eachInput of allInput) {
    eachInput.addEventListener('keyup', handleKeyUp);
}