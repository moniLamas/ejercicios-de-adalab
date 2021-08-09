'use strict';

function calculePrice (price) {
    let priceIva = price * 21 / 100;
    return `Precio sin iva: ${price}, IVA: ${priceIva} y Total: ${price + priceIva}`;
}

console.log(calculePrice(66));


