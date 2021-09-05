'use strict';

const orgSearch = document.querySelector('.js_organizarion');
const btnSearch = document.querySelector('.js_btnSearch');

function getOrgData(event) {
    event.preventDefault();
    let search = orgSearch.value;
    console.log(search);

    fetch(`https://api.github.com/orgs/${search}`)
        .then(response => response.json())
        .then(data => {
            const nameOrg = document.querySelector('.js_nameOrg');
            nameOrg.innerHTML = search;
            const repos = document.querySelector('.js_repos');
            repos.innerHTML = data.public_repos;
            const listRepo = document.querySelector('.js_listRepo');
            listRepo.innerHTML = `<li></li>`;
        })
}



btnSearch.addEventListener('click', getOrgData);