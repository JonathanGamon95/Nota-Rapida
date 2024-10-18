const LISTA = document.getElementById("lista");
const BOTON_AGREGAR_NUEVA_NOTA = document.getElementById("boton_agregar_nota");
const TITULO = document.getElementById("tema_nota");
const NOTA = document.getElementById("nota");




const botonEliminarNota = (boton) => {
    boton.parentNode.remove()
};





const descargarNota = (NOTA_CREADA) => {
    let contenido = NOTA_CREADA.innerText;
    let nombreArchivo = prompt("Ingrese un nombre al archivo:", "nota.txt") || "nota.txt" // Nombre del archivo

    let enlace = document.createElement('a');
    enlace.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(contenido);
    enlace.download = nombreArchivo;

    enlace.style.display = 'none';
    document.body.appendChild(enlace);

    enlace.click();
    document.body.removeChild(enlace);
};




const creacionDeNota = () => {
    //obtencion de textos
    const nota_obtenida = NOTA.value;
    const titulo_obtenido = TITULO.value;

    if (titulo_obtenido == "" || nota_obtenida == "") {
        alert("ingrese un tema y una nota para guardar");

    } else {
        //creacion de elementos;
        const LI = document.createElement("li");
        const H1 = document.createElement("h1");

        //boton eliminar nota:
        const BOTON_CERRAR = document.createElement("button");
        BOTON_CERRAR.setAttribute("id", "eliminar_nota");

        const ICONO_BOTON = document.createElement("i");
        ICONO_BOTON.setAttribute("class", "bi bi-x-lg icono_eliminar");
        //aplicando una funcion de eliminacion al boton:
        BOTON_CERRAR.addEventListener("click", () => botonEliminarNota(BOTON_CERRAR));


        //boton descargar nota:
        const BOTON_DESCARGAR_NOTA = document.createElement("button");
        BOTON_DESCARGAR_NOTA.setAttribute("id", "descargar_nota");

        const ICONO_DESCARGAR_NOTA = document.createElement("i");
        ICONO_DESCARGAR_NOTA.setAttribute("class", "bi bi-chevron-bar-down icono_descargar_nota");


        //etiqueta P (donde se guarda la nota):
        const NOTA_CREADA = document.createElement("p");
        NOTA_CREADA.setAttribute("id", "nota_guardada");

        BOTON_DESCARGAR_NOTA.addEventListener("click", () => descargarNota(NOTA_CREADA));






        //agregando textos:
        H1.textContent = titulo_obtenido;
        NOTA_CREADA.textContent = nota_obtenida;



        //dando color depeden del modo actual:
        if (MODO_ACTUAL == "modo_claro") {
            H1.style.color = "#91AEC4";
            ICONO_BOTON.style.color = "#91AEC4";
            ICONO_DESCARGAR_NOTA.style.color = "#91AEC4";
        } else {
            H1.style.color = "rgb(219, 236, 244)";
            ICONO_BOTON.style.color = "rgb(219, 236, 244)";
            ICONO_DESCARGAR_NOTA.style.color = "rgb(219, 236, 244)";
        }

        //introduccion:
        BOTON_CERRAR.appendChild(ICONO_BOTON);
        BOTON_DESCARGAR_NOTA.appendChild(ICONO_DESCARGAR_NOTA);
        LI.append(H1, BOTON_CERRAR, BOTON_DESCARGAR_NOTA, NOTA_CREADA);
        LISTA.appendChild(LI);

        TITULO.value = "";
        NOTA.value = "";
    }
};

BOTON_AGREGAR_NUEVA_NOTA.addEventListener("click", () => creacionDeNota());