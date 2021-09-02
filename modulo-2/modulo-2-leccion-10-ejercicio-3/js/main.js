'use strict';

const userSearch = document.querySelector('.js_user').value;

console.log(userSearch);

const btnSearch = document.querySelector('.js_btnSearch');

function getUserData(event) {
    fetch(`https://api.github.com/users/${userSearch}`)
        .then(response => response.json())
        .then(data => {

        })
}

btnSearch.addEventListener('click', getUserData);