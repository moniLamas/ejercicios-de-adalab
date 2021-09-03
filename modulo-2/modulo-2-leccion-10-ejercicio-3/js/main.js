'use strict';

const userSearch = document.querySelector('.js_user').value;


const btnSearch = document.querySelector('.js_btnSearch');

function getUserData() {
    fetch(`https://api.github.com/users/${userSearch}`)
        .then(response => response.json())
        .then(data => {
            const userName = document.querySelector('.userName');
            userName = data.login;
            const img = document.querySelector("img");
            img.src = data.avatar_url;
            img.alt = `Foto de ${userName}`;
            const repo = document.querySelector('.repos');
            repos = data.public_repos
        })
}

btnSearch.addEventListener('click', getUserData);