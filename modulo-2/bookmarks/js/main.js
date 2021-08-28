'use strict';

const menuDropdown = document.querySelector(".js_menu_dropdown");
const newForm = document.querySelector(".js_addNew");
const listData = document.querySelector(".js_list_data");

const bmk_1_url = 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion';
const bmk_1_desc = 'JS en los materiales de Adalab';
const bmk_1_seen = 'checked';

let html = `<li class="data__listitem">
<article class="data__item">
    <p class="item__url">
        <a href="https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion"
            target="_blank" rel="noopener noreferrer">
            books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion
        </a>
    </p>
    <p class="item__seen">
        <input type="checkbox" checked name="item_imp_2" id="item_imp_2">
    </p>
    <p class="item__desc">JS en los materiales de Adalab</p>
    <ul class="item__tags">
        <li class="item__tag">javascript</li>
        <li class="item__tag">HTML</li>
    </ul>
</article>
</li>`;

//Mostrar/ocultar menu hamburguesa
menuDropdown.classList.toggle('collapsed');
//Mostrar/ocultar añadir nuevo
newForm.classList.toggle('hidden');