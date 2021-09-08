'use strict';

const listElement = document.querySelector('.js_list');
const userInput = document.querySelector('.js_search');

let data = [];

fetch('//api.igarrido.es/promo-nerea.json')
    .then(response => response.json())
    .then(dataApi => {
        data = dataApi;

        render();
    });

function render() {
    console.log(data);
    console.table(data);

    // Ejemplo de map() con un array de objetos (luego lo encadenamos al filter):

    //const nameList = data.map( adalaberData => `<li>${adalaberData.name}<li>` );
    //console.log(nameList);

    const dataFiltered = data
        .filter(adalaberData => adalaberData.name.toLocaleLowerCase().includes(userInput.value))
        .map(adalaberData => adalaberData.name);

    listElement.innerHTML = '';
    for (const adalaberName of dataFiltered) {
        const html = `<li>${adalaberName}</li>`;

        listElement.innerHTML += html;
    }


    /*
      // Cómo buscar sólo una Adalaber en un array de objetos:
      const adalaberData = data.find(  adalaber  =>  adalaber.name.toLowerCase().includes('j')  );
      const html = `<li>${adalaberData.name}</li>`;
      listElement.innerHTML += html;
    */

    /*
      // Cómo escribir una lista de <li> con sólo el nombre de las adalabers
      console.log(data);
      for( const adalaberData of data ) {
        const html = `<li>${adalaberData.name}</li>`;
        listElement.innerHTML += html;
      }
    */
}

/**
 * Cada vez que la usuaria teclea, mandamos volver a escribir la lista.
 */

function handleType() {

    render();
}

userInput.addEventListener('keyup', handleType);

/**
 * Evito que se envíe el formulario (por si acaso):
 */

document.querySelector('.js_form').addEventListener('submit', (event) => event.preventDefault());




/* --- */
// Ejemplo de findIndex()

const nombreAQuitar = 'Ivanico';

/ *                [0]      [1]      [2]        [3]      [4]  * /
const nombres = ['Ana', 'Clara', 'Daniela', 'Irene', 'Paloma', 'Irene'];

const indiceAQuitar = nombres.findIndex(nombre => nombre === nombreAQuitar);

console.log(indiceAQuitar);

if (indiceAQuitar !== -1) {
    nombres.splice(indiceAQuitar, 1);
}

console.log(nombres)
/* --- */



/* --- */
// Ejemplos de map()

const numbers = [1, 2, 3, 4, 5];

const vatNumber = numbers.map(n => n * 1.21)

console.log(numbers);
console.log(vatNumber);

const names = ["Ana", "Clara"];
const lowerNames = names.map(n => n.toLocaleLowerCase())

console.log(names);
console.log(lowerNames);
/* --- */