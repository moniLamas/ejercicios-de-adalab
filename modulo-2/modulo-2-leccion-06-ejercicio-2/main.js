'use strict';

const adalaber1 = {
    name: 'Susana',
    age: 34,
    profession: 'peridista'
}
adalaber1.run = console.log (`Estoy corriendo`);

adalaber1.runMarathon = 50;

console.log(`Estoy corriendo un maratón de ${adalaber1.runMarathon} kilómetros`);


const text = document.querySelector('.text');

text.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.profession}`;



