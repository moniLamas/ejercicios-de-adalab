'use strict';

const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const firstDog = document.querySelector('.firstDog');

firstDog.innerHTML = `<img src="${firstDogImage}"><p>${firstDogName}</p>`;

const secondDog = document.querySelector('.secondDog');

secondDog.innerHTML = `<img src="${secondDogImage}"><p>${secondDogName}</p>`;

const thirdDog = document.querySelector('.thirdDog');

thirdDog.innerHTML = `<img src="${thirdDogImage}"><p>${thirdDogName}</p>`;
