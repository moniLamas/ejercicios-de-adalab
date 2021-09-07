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

const yourName = document.querySelector('#name');
const yourLastName = document.querySelector('.lastName');
const yourPhone = document.querySelector('.phone');

if (yourName === arrayName1.name) {
    yourLastName.value = arrayName1.lastName;
    yourPhone.value = arrayName1.phone;
    console.log(yourName);
} else if (yourName === arrayName2.name) {
    yourLastName.value = arrayName2.lastName;
    yourPhone.value = arrayName2.phone
} else if (yourName === arrayName3.name) {
    yourLastName.value = arrayName3.lastName;
    yourPhone.value = arrayName3.phone
}