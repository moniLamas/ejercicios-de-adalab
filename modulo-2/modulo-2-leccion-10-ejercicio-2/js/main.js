'use strict';

function getDogImage() {
    fetch("https://dog.ceo/api/breed/chihuahua/images/random ")
        .then(response => response.json())
        .then(data => {
            const img = document.querySelector("img");
            img.src = data.message;
            img.alt = "Un perro";
        });
}

function getOtherDogImage() {
    fetch("https://dog.ceo/api/breed/chihuahua/images/random ")
        .then(response => response.json())
        .then(data => {
            const img = document.querySelector('.js_otherImg');
            img.src = data.message;
            img.alt = "Un perro";
        });
}
const btn1 = document.querySelector(".js-dog");
const btn2 = document.querySelector(".js-otherDog");

btn1.addEventListener("click", getDogImage);
btn2.addEventListener("click", getOtherDogImage);