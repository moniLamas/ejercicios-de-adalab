'use strict';

const numbers = [1, 2, 3];

for (let eachNumber of numbers) {
    const newItem = document.createElement('li');
    const newContent = document.createTextNode(eachNumber);
    console.log(eachNumber);

    newItem.appendChild(newContent);
    console.log(newContent);

    const items = document.querySelector('.items');
    console.log(items);
    items.appendChild(newItem);
    console.log(newItem);
}