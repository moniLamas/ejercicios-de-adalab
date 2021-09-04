'use strict';

const userSearch = document.querySelector('.js_user');
const btnSearch = document.querySelector('.js_btnSearch');

function getUserData() {
    let search = userSearch.value;
    console.log('search');
    fetch(`https://api.github.com/users/${search}`)
        .then(response => response.json())
        .then(data => {
            const userName = document.querySelector('.js_userName');
            userName.innerHTML = data.login;
            const img = document.querySelector("img");
            img.src = data.avatar_url;
            img.alt = `Foto de ${userName}`;
            const repo = document.querySelector('.js_repos');
            repo.innerHTML = data.public_repos;

        })
}

btnSearch.addEventListener('click', getUserData);