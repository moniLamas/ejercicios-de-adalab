'use strict';
// De viaje
// Crea una página que contenga tres imágenes, usando un select de formulario pregúntale a la usuaria qué ciudad quiere visitar.
// Si la usuaria elige Madrid, haz que en cada imagen se muestre una foto de Madrid
// Haz lo mismo para París y Nueva York

const city1 = [{
        name: 'Madrid',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Palaciorealycatedraldelaalmudena_%28cropped%29.jpg/280px-Palaciorealycatedraldelaalmudena_%28cropped%29.jpg',
        alt: 'Imagen del Palacio Real'
    },
    {
        name: 'Madrid',
        src: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Torres_de_Madrid_%28detalle%29.JPG',
        alt: 'Imagen de las Torres Madrid'
    },
    {
        name: 'Madrid',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Inicio_de_la_Gran_V%C3%ADa_%28cropped%29.jpg/2560px-Inicio_de_la_Gran_V%C3%ADa_%28cropped%29.jpg',
        alt: 'Imagen de La Gran Vía'
    },
];

const city2 = [{
        name: 'París',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/2560px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
        alt: 'Imagen de la Torre Eiffel'
    },
    {
        name: 'París',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Arcdetriomphe_2.jpg/2560px-Arcdetriomphe_2.jpg',
        alt: 'Imagen del Arco del Triunfo'
    },
    {
        name: 'París',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Louvre_Courtyard%2C_Looking_West.jpg/2880px-Louvre_Courtyard%2C_Looking_West.jpg',
        alt: 'Imagen del Louvre'
    }
]

const city3 = [{
        name: 'New York',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Lower_Manhattan_skyline_-_June_2017.jpg/2880px-Lower_Manhattan_skyline_-_June_2017.jpg',
        alt: 'Imagen de lower Manhattan'
    }, {
        name: 'New York',
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/2560px-New_york_times_square-terabass.jpg',
        alt: 'Imagen de Times Square',
    },
    {
        name: 'New York',
        src: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Qwertyliberty123.jpg',
        alt: 'Imagen de la estatua de la Libertad'
    }
]

const select = document.querySelector('#city');
const image1 = document.querySelector('.pic1');
const image2 = document.querySelector('.pic2');
const image3 = document.querySelector('.pic3');

function handleOption(event) {
    event.preventDefault();

    if (select.value === city1[0].name) {
        image1.src = city1[0].src;
        image1.alt = city1[0].alt;
        image2.src = city1[1].src;
        image2.alt = city1[1].alt;
        image3.src = city1[2].src;
        image3.alt = city1[2].alt;

    } else if (select.value === city2[0].name) {
        image1.src = city2[0].src;
        image1.alt = city2[0].alt;
        image2.src = city2[1].src;
        image2.alt = city2[1].alt;
        image3.src = city2[2].src;
        image3.alt = city2[2].alt;

    } else if (select.value === city3[0].name) {
        image1.src = city3[0].src;
        image1.alt = city3[0].alt;
        image2.src = city3[1].src;
        image2.alt = city3[1].alt;
        image3.src = city3[2].src;
        image3.alt = city3[2].alt;

    }
}


select.addEventListener('change', handleOption);