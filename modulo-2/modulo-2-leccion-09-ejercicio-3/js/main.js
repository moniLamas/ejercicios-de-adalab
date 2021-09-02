'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];
const parNumbersArray = [];
const multiplo3Array = [];
const newArray = [];

function bestLostNumbre() {
    for (let i = 0; i < lostNumbers.length; i++) {
        if (lostNumbers[i] % 2 === 0) {
            parNumbersArray.push(lostNumbers[i]);
        } else if (lostNumbers[i] % 3 === 0) {
            multiplo3Array.push(lostNumbers[i]);
        }
    }
    const concatArray = parNumbersArray.concat(multiplo3Array);
    newArray.push(concatArray);
    console.log(newArray);
}

bestLostNumbre();

console.log(parNumbersArray);
console.log(multiplo3Array);
console.log(newArray);