'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];

function parNumbers() {
    const parNumbersArray = [];
    for (let i = 0; i < lostNumbers.length; i++) {
        if (lostNumbers[i] % 2 === 0) {
            parNumbersArray.push(lostNumbers[i]);
        }
    }
    console.log(parNumbersArray);
}

parNumbers();