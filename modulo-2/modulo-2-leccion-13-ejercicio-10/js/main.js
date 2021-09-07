'use strict';

const users = [{
        name: 'María',
        isPremium: false,
        pin: 2389
    },
    {
        name: 'Lucía',
        isPremium: true,
        pin: 2384
    },
    {
        name: 'Susana',
        isPremium: true,
        pin: 2837
    },
    {
        name: 'Rocío',
        isPremium: false,
        pin: 5232
    },
    {
        name: 'Inmaculada',
        isPremium: false,
        pin: 8998
    }
];

//incidencia con el pin: 5232

const problemPin = users.find(users => users.pin === 5232);
console.log(problemPin);

const index = users.findIndex(users => users.pin === 5232);
console.log(index);

users.splice(3, 1);
console.log(users);

//splice findIndex