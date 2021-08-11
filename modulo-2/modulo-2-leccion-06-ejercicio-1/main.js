'use strict';

const adalaber1 = {
    name: 'Susana',
    age: 34,
    profession: 'peridista'
}

const adalaber2 = {
    name: 'Rocio',
    age: 25,
    profession: 'actriz'
}

const text = document.querySelector('.text');

const addText = document.querySelector('.text')

text.innerHTML = `Mi nombre es ${adalaber1.name}, tengo ${adalaber1.age} años y soy ${adalaber1.profession}`;

text.innerHTML = `Mi nombre es ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.profession}`;

