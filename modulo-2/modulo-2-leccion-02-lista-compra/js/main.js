'use strict';

const lista = document.querySelector('.js_lista');

const item1 = 'Yogures';
const precio1 = 1.30;
const item2 = 'Leche';
const precio2 = 0.65;
const item3 = 'Tomates';
const precio3 = 1.35;
const totalIva = precio1 * 0.21 + precio2 * 0.4 + precio3 * 0.4;
const total = precio1 + precio2 + precio3 + totalIva;

lista.innerHTML = `<li>${item1} <span>${precio1}</span></li>`;
// lista.innerHTML = lista.innerHTML + `<li>${item2} <span>${precio2}</span></li>`;
lista.innerHTML += `<li>${item2} <span>${precio2}</span></li>`;


let html = `<li>${item1} <span>${precio1}</span></li>`;

html += `<li>${item2} <span>${precio2}</span></li>`;

html += `<li>${item3} <span>${precio3}</span></li>`;

html += `<li>Total iva <span>${totalIva}</span></li>`;

html += `<li>TOTAL <span>${total}</span></li>`;


lista.innerHTML = html;