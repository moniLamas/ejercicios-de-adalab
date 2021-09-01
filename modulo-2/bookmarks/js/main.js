'use strict';

const menuDropdown = document.querySelector(".js_menu_dropdown");
const linkDropdown = document.querySelector(".js_link_dropdown");
const listData = document.querySelector(".js_list_data");
const boardData = document.querySelector('.js_boardData');
const newForm = document.querySelector(".js_addNew");
const buttomShowAdd = document.querySelector(".js_button_add");
const buttomShowCardview = document.querySelector(".js_cardview_button");
const buttomShowTableview = document.querySelector(".js_tableview_button");


const bmkData_1 = {
    url: 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-2-programando-la-web/javascript/2_1_intro_a_la_programacion',
    desc: 'JS en los materiales de Adalab',
    seen: true,
    tags_1: 'javascript',
    tags_2: ''
};

const bmkData_2 = {
    url: 'https://thesmartcoder.dev/9-awesome-projects-you-can-build-with-vanilla-javascript/',
    desc: 'Ideas de proyectos JS',
    seen: true,
    tags_1: '',
    tags_2: ''
}

const bmkData_3 = {};
bmkData_3.url = 'https://books.adalab.es/materiales-del-curso-n/-MdR6Gp68BX20m1pi0z2/modulo-1-html-y-css/1_1_intro_a_la_web';
bmkData_3.desc = 'HTML en los materiales de Adalab';
bmkData_3.seen = false;
bmkData_3.tags_1 = 'html';
bmkData_3.tags_2 = 'css';

//FUNCIONES

function renderTags(tag_1, tag_2) {
    let htmlTags = `
          <ul class="item__tags">`;

    if (tag_1 !== '') {
        htmlTags += `
            <li class="item__tag">${tag_1}</li>`;
    }

    if (tag_2 !== '') {
        htmlTags += `
            <li class="item__tag">${tag_2}</li>`;
    }

    htmlTags += `      
          </ul>
        `;

    return htmlTags;
}

function renderSeen(seen) {
    if (seen) {
        return 'checked title="Enlace leído"';
    } else {
        return 'title="Por leer"';
    }
}


function renderBookmark(bmkData) {
    const htmlTags = renderTags(bmkData.tags_1, bmkData.tags_2);
    const htmlSeen = renderSeen(bmkData.seen);

    const htmlBookmarks = `
        <li class="data__listitem">
            <article class="data__item">
                <p class="item__url">
                    <a href="${bmkData.url}"
                target="_blank" rel="noopener noreferrer">
                ${bmkData.url}
                    </a>
                </p>
                <p class="item__seen">
                    <input type="checkbox" ${htmlSeen} name="item_imp_2" id="item_imp_2">
                </p>
                <p class="item__desc">${bmkData.desc}</p>
                
                ${htmlTags}
                
            </article>
        </li>`;

    return htmlBookmarks;
}

let html = renderBookmark(bmkData_1);
html += renderBookmark(bmkData_2);
html += renderBookmark(bmkData_3);


listData.innerHTML = html;

//Mostrar vista de tarjetas: lista o tarjetas

/* if (boardData.classList.contains('tableview')) {
    setCardListView();
} else if (boardData.classList.contains('listview')) {
    setTableView();
}*/

function setCardListView() {
    boardData.classList.remove('tableview');
    boardData.classList.add('listview');
}

function setTableView() {
    boardData.classList.remove('listview');
    boardData.classList.add('tableview');
}

//Mostrar/ocultar drop down menu de la hamburguesa
function toggleDropDownMenu() {
    menuDropdown.classList.toggle('collapsed');
}


// Mostrar/ocultar añadir nuevo
// newForm.classList.toggle('hidden');
function addNew() {
    newForm.classList.remove('hidden');
};



//EVENTOS
function handleClickLinkDropdown(event) {
    event.preventDefault();
    toggleDropDownMenu();
}

linkDropdown.addEventListener('click', handleClickLinkDropdown);

function handleClickShowCardview(event) {
    event.preventDefault();
    setCardListView();
    buttomShowTableview.classList.remove('selected');
    buttomShowCardview.classList.add('selected');
}

function handleClickShowTableview(event) {
    event.preventDefault();
    setTableView();
    buttomShowCardview.classList.remove('selected');
    buttomShowTableview.classList.add('selected');
}

buttomShowCardview.addEventListener('click', handleClickShowCardview);
buttomShowTableview.addEventListener('click', handleClickShowTableview);

buttomShowAdd.addEventListener('click', addNew);