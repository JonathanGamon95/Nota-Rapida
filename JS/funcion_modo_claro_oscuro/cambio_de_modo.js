const BOTON_CAMBIO_DE_MODO = document.getElementById("boton_modo_claro_oscuro");
const BOTON_CREAR_NOTA = document.getElementById("boton_crear_nota");
const BOTON_ABRIR_DESACARGA = document.getElementById("boton_menu_header");

const BOTON_DESCARGA_NOTA = document.getElementById("boton_descarga_nota");
const BOTON_CERRAR_DESCARGA = document.getElementById("boton_cerrar_descarga")

//contenido principal 1:
const CONTENEDOR_PRINCIPAL = document.getElementById("contenedor_principal_1");
const TITULOS = document.querySelectorAll("h1");
const ICONO_ELIMINAR_NOTA = document.querySelectorAll(".icono_eliminar");
const ICONO_BOTON_DESCARGAR_NOTA = document.querySelectorAll(".descargar_nota");


//contenido principal 2:
const CONTENIDO_PRINCIPAL_EXTERNO_2 = document.getElementById("cont_principal_2_externo");
const ICONO_BOTONES_PRINCIPAL_2 = document.querySelectorAll(".icono_principal_2");

//contenedor principal 3:
const CONTENEDOR_PRINCIPAL_3 = document.getElementById("contenedor_pricnipal_3_interno");

//etiquetas header:
const HEADERS = document.querySelectorAll("header");



let MODO_ACTUAL = BOTON_CAMBIO_DE_MODO.getAttribute("class");
const cambioDeModo = () => {
    if (MODO_ACTUAL == "modo_claro") {
        MODO_ACTUAL = "modo_oscuro";
        //boton modo:
        BOTON_CAMBIO_DE_MODO.setAttribute("class", MODO_ACTUAL);
        BOTON_CAMBIO_DE_MODO.children[0].setAttribute("class", "bi bi-toggle-on");
        BOTON_CAMBIO_DE_MODO.children[0].style.color = "#DBECF4";

        //CONTENIDO PRINCIPAL 1:
        CONTENEDOR_PRINCIPAL.style.backgroundColor = "#333333";

        //botones crear / menu:
        BOTON_CREAR_NOTA.children[0].style.color = "#DBECF4";
        BOTON_ABRIR_DESACARGA.children[0].style.color = "#DBECF4";
        

        //placeholder
        // TITULO.style.placeholder.color = "#fff"
        
        //titulos:
        for (let i of TITULOS) {
            i.style.color = "#DBECF4";
        }

        //icono li:
        for (let k of ICONO_ELIMINAR_NOTA) {
            k.style.color = "#DBECF4";
        }


        //icono_boton_descargar
        for (let h of ICONO_BOTON_DESCARGAR_NOTA) {
            h.style.color = "#DBECF4";
        }


        //colores a lista creadas
        for (let i of LISTA.children) {
            i.children[0].style.color = "rgb(219, 236, 244)";
            i.children[1].children[0].style.color = "rgb(219, 236, 244)";
            i.children[2].children[0].style.color = "rgb(219, 236, 244)";
        }


        //CONTENIDO PRINCIPAL 2:
        CONTENIDO_PRINCIPAL_EXTERNO_2.style.backgroundColor = "#333333";

        //icono principal 2:
        for (let j of ICONO_BOTONES_PRINCIPAL_2) {
            j.style.color = "#DBECF4";
        }



        //nota:
        CONTENIDO_PRINCIPAL_EXTERNO_2.children[0].children[0].style.color = "aliceblue";
        

        //textaera:
        CONTENIDO_PRINCIPAL_EXTERNO_2.children[1].style.backgroundColor = "#333333";
        CONTENIDO_PRINCIPAL_EXTERNO_2.children[1].style.color = "aliceblue";





        //CONTENEDOR PRINCIPAL 3:
        CONTENEDOR_PRINCIPAL_3.style.backgroundColor = "#333333";



        //HEADERS:
        for(let n of HEADERS) {
            n.style.backgroundColor = "#E6B905";
        }

    } else {
        MODO_ACTUAL = "modo_claro";
        BOTON_CAMBIO_DE_MODO.setAttribute("class", MODO_ACTUAL);
        BOTON_CAMBIO_DE_MODO.children[0].setAttribute("class", "bi bi-toggle-off");
        BOTON_CAMBIO_DE_MODO.children[0].style.color = "#91AEC4";

        //contenedor general:
        CONTENEDOR_PRINCIPAL.style.backgroundColor = "aliceblue";

        //botones crear / menu:
        BOTON_CREAR_NOTA.children[0].style.color = "#91AEC4";
        BOTON_ABRIR_DESACARGA.children[0].style.color = "#91AEC4";

        //titulos:
        for (let i of TITULOS) {
            i.style.color = "#91AEC4";
        }

        //icono li:
        for (let k of ICONO_ELIMINAR_NOTA) {
            k.style.color = "#91AEC4";
        }



        //icono_boton_descargar
        for (let h of ICONO_BOTON_DESCARGAR_NOTA) {
            h.style.color = "#91AEC4";
        }


        //colores a lista creadas
        for (let i of LISTA.children) {
            i.children[0].style.color = "#91AEC4";
            i.children[1].children[0].style.color = "#91AEC4";
            i.children[2].children[0].style.color = "#91AEC4";
        }




        //contenido principal 2:
        CONTENIDO_PRINCIPAL_EXTERNO_2.style.backgroundColor = "aliceblue";

        //icono principal 2:
        for (let j of ICONO_BOTONES_PRINCIPAL_2) {
            j.style.color = "#91AEC4";
        }




        //nota:
        CONTENIDO_PRINCIPAL_EXTERNO_2.children[0].children[0].style.color = "#000";


        //textaera:
        CONTENIDO_PRINCIPAL_EXTERNO_2.children[1].style.backgroundColor = "aliceblue";
        CONTENIDO_PRINCIPAL_EXTERNO_2.children[1].style.color = "#000";


        //CONTENEDOR PRINCIPAL 3:
        CONTENEDOR_PRINCIPAL_3.style.backgroundColor = "aliceblue";



        //HEADERS:
        for(let n of HEADERS) {
            n.style.backgroundColor = "#b4fdff79";
        }
    }
};

BOTON_CAMBIO_DE_MODO.addEventListener("click", () => cambioDeModo());