'use strict';

const cestaPeras = {
    num_max: 50,
    num_min: 10,
    num_actual: 13,
    num_inicial: 40,
    }

cestaPeras.añadir = function () {
    this.num_actual += 1;
    return this.num_actual;
}
console.log(cestaPeras.añadir());

cestaPeras.restar = function () {
    this.num_actual -= 1;
    return this.num_actual
}

console.log(cestaPeras.restar());

cestaPeras.restaurar = function () {
    return this.num_inicial;
}

console.log(cestaPeras.restaurar());




