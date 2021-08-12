'use strict';

const button = document.querySelector('.js_button');



function clickButton (event) { 
    console.log(event);
}

button.addEventListener( 'click' , clickButton );
// const adalaber1 = {
//     name: 'Susana',
//     age: 34,
//     profession: 'peridista'
// }

// adalaber1.showBio = function (){
//     console.log(`Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.profession}`);

// }

// adalaber1.showBio();





