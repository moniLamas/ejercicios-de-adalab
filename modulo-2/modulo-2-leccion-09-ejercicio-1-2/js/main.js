'use strict';

const array100Numbers = [];
const reverseArrray100Numbers = [];

function get100Numbers() {
    for (let i = 0; i < 100; i++) {
        array100Numbers.push(i);
    }
}
get100Numbers();

console.log(array100Numbers);

function getReversed100Numbers() {
    array100Numbers.reverse();
    reverseArrray100Numbers.push(array100Numbers);
}

getReversed100Numbers();
console.log(reverseArrray100Numbers);