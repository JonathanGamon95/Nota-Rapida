const CONTENIDO_PRINCIPAL_2_EXTERNO = document.getElementById("cont_principal_2_externo");
const BOTON_CERRAR = document.getElementById("boton_cerrar");

const CONTENEDOR_PRINCIPAL_3_INTERNO = document.getElementById("contenedor_pricnipal_3_interno");

const abriContenidoPrincipal = () => {
    CONTENIDO_PRINCIPAL_2_EXTERNO.style.transform = "translateX(-103%)";
    CONTENEDOR_PRINCIPAL.style.borderTopLeftRadius = "0";
};

const ocultarContenidoPrincipal = () => {
    CONTENIDO_PRINCIPAL_2_EXTERNO.style.transform = "translateX(0%)";
    CONTENEDOR_PRINCIPAL.style.borderTopLeftRadius = "10px";

     //limpia el campo de texto en tema_nota y textaera:
     CONTENIDO_PRINCIPAL_EXTERNO_2.children[0].value = "";
     CONTENIDO_PRINCIPAL_2_EXTERNO.children[0].children[0].value = "";
}


BOTON_CREAR_NOTA.addEventListener("click", abriContenidoPrincipal);
BOTON_CERRAR.addEventListener("click", ocultarContenidoPrincipal);




const abrirPanelDescarga = () => {
    CONTENEDOR_PRINCIPAL.style.borderTopRightRadius = "0";
    CONTENEDOR_PRINCIPAL_3_INTERNO.style.transform = "translateX(100%)";
}

const cerrarPanelDescarga = () => {
    CONTENEDOR_PRINCIPAL_3_INTERNO.style.transform = "translateX(0%)";
    CONTENEDOR_PRINCIPAL.style.borderTopRightRadius = "10px";
}

BOTON_ABRIR_DESACARGA.addEventListener("click", () => abrirPanelDescarga());
BOTON_CERRAR_DESCARGA.addEventListener("click", () => cerrarPanelDescarga());