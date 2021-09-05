'use strict';

const orgSearch = document.querySelector('.js_organization');
const btnSearch = document.querySelector('.js_btnSearch');

function getOrgData(event) {
    event.preventDefault();
    const search = orgSearch.value;

    fetch(`https://api.github.com/orgs/${search}/repos`)
        .then(response => response.json())
        .then(data => {
            const nameOrg = document.querySelector('.js_nameOrg');
            nameOrg.innerHTML = search;
            const repos = document.querySelector('.js_repos');
            repos.innerHTML = data.public_repos;
            const nameRepo = data.full_name;
            const listRepo = document.querySelector('.js_listRepo');
            listRepo.innerHTML = `<li>${nameRepo[0]}</li>`;
        })
}



btnSearch.addEventListener('click', getOrgData);