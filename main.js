const d = document;

const divSidebar = d.getElementById("sidebar-div");
//acceso al content del template:
const templateSidebar = d.getElementById("sidebar-template").content;
//creacion de un fragment, insercion dinamica, de un jalón
const fragment = document.createDocumentFragment();

//nomas pa probar que si funciona, luego lo hare con la news API
const arrayLista = ["primer elemento","segundo elemento","tercer elemento"];

arrayLista.forEach( (el) => {
    //modificamos el template
    templateSidebar.querySelector("h4").textContent = el;

    const clon = d.importNode(templateSidebar, true);

    //insertamos el clon (content del template) al fragment
    fragment.appendChild(clon);
});

//pegamos el fragmento al sidebar-div
divSidebar.appendChild(fragment);
//wuuwuwuwuw si se pudooooo
//entonces sería el mismo rollo pero 
//ahora haciendo un ajax con lo que se traiga la API :) !