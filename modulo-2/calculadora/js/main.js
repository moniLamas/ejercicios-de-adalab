'use strict'


// crear variable con el elemento primer número
const numberAElement = document.querySelector(".js-number-a");
// crear variable con el elemento segundo número
const numberBElement = document.querySelector(".js-number-b");
// crear variable con el elemento resultado
const resultElement = document.querySelector(".js-result");

//crear una variable que guarde la función
const add = function () {
  // guarda el valor de numberAElement
  let numberAValue = numberAElement.value;
  // pasa el valor de string a número
  numberAValue = parseInt(numberAValue);
  // guarda el valor de numberBElement
  let numberBValue = numberBElement.value;
  // pasa el valor de string a número
  numberBValue = parseInt(numberBValue);

  // crea una variable resultado con la suma de los valores anteriores
  const resultValue = numberAValue + numberBValue;
  // evalua el resultado
  if (isNaN(resultValue)) {
      //si no es un número mostrará error
    resultElement.classList.add("text--error");
    resultElement.innerHTML = "Datos inválidos";
  } else {
    // de lo contrario mostrará el valor
    resultElement.classList.remove("text--error");
    resultElement.innerHTML = resultValue;
  }
};


// vigila los cambios en el input numberAElement
numberAElement.addEventListener("change", add);
// vigila los cambios en el input numberBElement
numberBElement.addEventListener("change", add);



// reset button
// crea variable con el elemento js-reset
const resetElement = document.querySelector(".js-reset");

// vacia los input
const reset = function () {
  numberAElement.value = "";
  numberBElement.value = "";
  resultElement.innerHTML = "";
};

// vigila el click del botón reset
resetElement.addEventListener("click", reset);
