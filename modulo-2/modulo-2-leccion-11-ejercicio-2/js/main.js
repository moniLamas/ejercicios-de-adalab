'use strict';

const person = document.querySelector('.js_person');
const btnSearch = document.querySelector('.js_btnSearch');

let personName;

function getPersonData(event) {
    event.preventDefault();
    const search = person.value;
    console.log(search);

    fetch(`https://swapi.dev/api/people/?search=${search}`)
        .then(response => response.json())
        .then(data => {
            personName = search;
            // const results = data.results;
            // console.log(search);
            const namePerson = document.querySelector('.js_name');
            // console.log(results);
            namePerson.innerHTML = data.results[item].name;

            const hairPerson = document.querySelector('js_hairColor');
            hairPerson.innerHTML = results.hair_color;
        })
}


btnSearch.addEventListener('click', getPersonData);