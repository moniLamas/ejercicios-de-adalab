'use strict';

const arrayName1 = {
    name: 'Julia',
    lastName: 'Ruiz',
    phone: '888345765'
}

const arrayName2 = {
    name: 'Esther',
    lastName: 'Garcia',
    phone: '357983450'
}

const arrayName3 = {
    name: 'Sonia',
    lastName: 'Vazquez',
    phone: '135792468'
}

const data = [arrayName1, arrayName2, arrayName3]


const yourName = document.querySelector('#name');
const names = document.querySelector('.js_name');
const yourLastName = document.querySelector('.lastName');
const yourPhone = document.querySelector('.phone')

function autocomplete() {
    if (yourName.value === 'Julia') {
        yourLastName.setAttribute('value', data[0].lastName);
        yourPhone.setAttribute('value', data[0].phone);
    } else if (yourName.value === 'Esther') {
        yourLastName.setAttribute('value', data[1].lastName);
        yourPhone.setAttribute('value', data[1].phone);
    } else if (yourName.value === data[2].name) {
        yourLastName.setAttribute('value', data[2].lastName);
        yourPhone.setAttribute('value', data[2].phone);
    }
}
console.log(yourName);

yourName.addEventListener('change', autocomplete);