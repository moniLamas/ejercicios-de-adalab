'use strict';

const items = document.querySelector('.items');

const numbers = [1, 2, 3];

for (let eachNumber of numbers) {
    const newItem = document.createElement('li');
    const newContent = document.createTextNode(eachNumber);

    newItem.appendChild(newContent);

    items.appendChild(newItem);
}