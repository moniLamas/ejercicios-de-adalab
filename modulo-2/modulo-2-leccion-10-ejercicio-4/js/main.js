'use strict';

const orgSearch = document.querySelector('.js_organization');
const btnSearch = document.querySelector('.js_btnSearch');

let list = [];

function getOrgData(event) {
    event.preventDefault();
    const search = orgSearch.value;


    fetch(`https://api.github.com/orgs/${search}/repos`)
        .then(response => response.json())
        .then(data => {
            const nameOrg = document.querySelector('.js_nameOrg');
            nameOrg.innerHTML = search;
            // const repos = document.querySelector('.js_repos');
            // repos.innerHTML = data.public_repos;
            let nameRepo = data.full_name;
            console.log(nameREpo);
            list = nameRepo;
            const listRepo = document.querySelector('.js_listRepo');
            for (let i = 0; i < list.length, i++) {
                listRepo.innerHTML = `<li>${nameRepo}</li>`;
            }
        })
}



btnSearch.addEventListener('click', getOrgData);