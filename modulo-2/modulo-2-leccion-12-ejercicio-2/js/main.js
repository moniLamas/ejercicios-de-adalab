'use strict';
// De viaje
// Crea una página que contenga tres imágenes, usando un select de formulario pregúntale a la usuaria qué ciudad quiere visitar.
// Si la usuaria elige Madrid, haz que en cada imagen se muestre una foto de Madrid
// Haz lo mismo para París y Nueva York


//Madrid
//https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Palaciorealycatedraldelaalmudena_%28cropped%29.jpg/2880px-Palaciorealycatedraldelaalmudena_%28cropped%29.jpg
//https://upload.wikimedia.org/wikipedia/commons/1/1c/Torres_de_Madrid_%28detalle%29.JPG
//https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Inicio_de_la_Gran_V%C3%ADa_%28cropped%29.jpg/2560px-Inicio_de_la_Gran_V%C3%ADa_%28cropped%29.jpg

//Paris
//https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/2560px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg
//https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Arcdetriomphe_2.jpg/2560px-Arcdetriomphe_2.jpg
//https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Avenue_des_Champs-%C3%89lys%C3%A9es_July_24%2C_2009_N1.jpg/440px-Avenue_des_Champs-%C3%89lys%C3%A9es_July_24%2C_2009_N1.jpg

//New York
//https://commons.wikimedia.org/wiki/File:New_york_times_square-terabass.jpg
//https://commons.wikimedia.org/wiki/File:Lower_Manhattan_skyline_-_June_2017.jpg
//https://commons.wikimedia.org/wiki/File:Manhattan_at_Dusk_by_slonecker.jpg

const select = document.querySelector('#city');
const image1 = document.querySelector('.pic1');
const image2 = document.querySelector('.pic2');
const image3 = document.querySelector('.pic3');

if (select.value === 'Madrid') {
    image1.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Palaciorealycatedraldelaalmudena_%28cropped%29.jpg/280px-Palaciorealycatedraldelaalmudena_%28cropped%29.jpg';
    image1.alt = 'Imagen de Madrid';
    image2.src = 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Torres_de_Madrid_%28detalle%29.JPG';
    image2.alt = 'Imagen de Madrid';
    image3.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Inicio_de_la_Gran_V%C3%ADa_%28cropped%29.jpg/2560px-Inicio_de_la_Gran_V%C3%ADa_%28cropped%29.jpg';
    image3.alt = 'Imagen de Madrid';

}