'use strict';

let value = prompt('Dime tu número favorito', '');

if (value > 0) {
    alert('Tu número es positivo');
} else if ( value == 0) {
    alert('Tu número es 0');
} else if (value < 0){
    alert('Tu número es negativo');
} else {
    alert('No me has dicho un número');
}