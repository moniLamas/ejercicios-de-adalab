'use strict';

const pins = [2389, 2384, 2837, 5232, 8998];

const findPar = (number) => number % 2 === 0;

const parPins = pins.filter(findPar);

console.log(parPins);