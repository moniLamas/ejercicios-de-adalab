'use strict';

const userSearch = document.querySelector('.js_user');
const btnSearch = document.querySelector('.js_btnSearch');

function getUserData(event) {
    event.preventDefault();
    let search = userSearch.value;
    console.log('search');
    fetch(`https://api.github.com/users/${search}`)
        .then(response => response.json())
        .then(data => {
            debugger;
            const userName = document.querySelector('.js_userName');

            userName.innerHTML = data.login;
            const repos = document.querySelector('.js_repos');
            repos.innerHTML = data.public_repos;
            console.log(data.avatar_url);

            const img = document.querySelector('.js_img');
            img.src = data.avatar_url;
            img.alt = `Foto de ${userName}`;


        })
}

btnSearch.addEventListener('click', getUserData);