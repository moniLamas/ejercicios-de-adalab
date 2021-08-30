'use strict';

const dog = 12;
const humano1 = 15;
const humano2 = 15 + 9;
const humano3 = dog * 5;

if (dog === 1) {
    console.log(`Tu perro tiene ${dog} año, equivale a ${humano1} años de humano`);

} else if (dog === 2) {
    console.log(`Tu perro tiene ${dog} años que equivale a ${humano2} años de humano`);
} else {
    console.log(`Tu perro tiene ${dog} años que equivale a ${humano3} años de humano`);
}