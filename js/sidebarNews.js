import data from "../data/data.js";
const d= document;

//a donde le inyectaremos el fragment
const divSidebar = d.getElementById("sidebar-div");
//acceso al content del template:
const templateSidebar = d.getElementById("sidebar-template").content;
//creacion de un fragment, insercion dinamica, de un jalón
const fragment = document.createDocumentFragment();

const {sideBar} = data;

sideBar.forEach((news) => {
    templateSidebar.querySelector("h4").textContent = news.title;
    templateSidebar.querySelector("p").textContent = news.description;

    const clon = d.importNode(templateSidebar, true);
    fragment.appendChild(clon);
});


//pegamos el fragmento al sidebar-div
divSidebar.appendChild(fragment);

