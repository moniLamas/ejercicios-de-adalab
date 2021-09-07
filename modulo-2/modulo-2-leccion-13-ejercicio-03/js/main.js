'use strict';


const users = [{
        name: 'María',
        isPremium: false
    },
    {
        name: 'Lucía',
        isPremium: true
    },
    {
        name: 'Susana',
        isPremium: true
    },
    {
        name: 'Rocío',
        isPremium: false
    },
    {
        name: 'Inmaculada',
        isPremium: false
    }
];

const premiumUsers = users.filter((greet) => greet.isPremium);
console.log(premiumUsers);

const greeting = premiumUsers.map((greet) => 'Bienvenida ' + greet.name + ', gracias por confirar en nosotros.');

console.log(greeting);