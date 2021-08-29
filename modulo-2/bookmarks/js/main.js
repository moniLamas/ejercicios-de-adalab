'use strict';

const menuDropdown = document.querySelector(".js_menu_dropdown");
const newForm = document.querySelector(".js_addNew");
const listData = document.querySelector(".js_list_data");

//Mostrar/ocultar menu hamburguesa
menuDropdown.classList.toggle('collapsed');
//Mostrar/ocultar añadir nuevo
newForm.classList.toggle('hidden');

const bmk_1_url = 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion';
const bmk_1_desc = 'JS en los materiales de Adalab';
const bmk_1_seen = 'checked';
const bmk_1_tag_1 = 'javascript';
const bmk_1_tag_2 = 'html';

let html = `
    <li class="data__listitem">
        <article class="data__item">
            <p class="item__url">
                <a href="${bmk_1_url}"
            target="_blank" rel="noopener noreferrer">
            ${bmk_1_url}
                </a>
            </p>
            <p class="item__seen">
                <input type="checkbox" ${bmk_1_seen} name="item_imp_2" id="item_imp_2">
            </p>
            <p class="item__desc">${bmk_1_desc}</p>
            <ul class="item__tags">
                <li class="item__tag">${bmk_1_tag_1}</li>
                <li class="item__tag">${bmk_1_tag_2}</li>
            </ul>
        </article>
    </li>`;

const bmk_2_url = 'https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/';
const bmk_2_desc = 'Ideas de proyectos JS';
const bmk_2_seen = 'checked';
const bmk_2_tag_1 = 'javascript';
const bmk_2_tag_2 = 'portfolio';

html += `
    <li class="data__listitem">
        <article class="data__item">
            <p class="item__url">
                <a href="${bmk_2_url}"
            target="_blank" rel="noopener noreferrer">
            ${bmk_2_url}
                </a>
            </p>
            <p class="item__seen">
                <input type="checkbox" ${bmk_2_seen} name="item_imp_2" id="item_imp_2">
            </p>
            <p class="item__desc">${bmk_2_desc}</p>
            <ul class="item__tags">
                <li class="item__tag">${bmk_2_tag_1}</li>
                <li class="item__tag">${bmk_2_tag_2}</li>
            </ul>
        </article>
    </li>`;

const bmk_3_url = 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web';
const bmk_3_desc = 'HTML en los materiales de Adalab';
const bmk_3_seen = 'checked';
const bmk_3_tag_1 = 'html';
const bmk_3_tag_2 = 'css';

html += `
    <li class="data__listitem">
        <article class="data__item">
            <p class="item__url">
                <a href="${bmk_3_url}"
            target="_blank" rel="noopener noreferrer">
            ${bmk_3_url}
                </a>
            </p>
            <p class="item__seen">
                <input type="checkbox" ${bmk_3_seen} name="item_imp_2" id="item_imp_2">
            </p>
            <p class="item__desc">${bmk_3_desc}</p>
            <ul class="item__tags">
                <li class="item__tag">${bmk_3_tag_1}</li>
                <li class="item__tag">${bmk_3_tag_2}</li>
            </ul>
        </article>
    </li>`;


listData.innerHTML = html;