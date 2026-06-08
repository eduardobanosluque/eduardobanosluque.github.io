const FILAS = 20;
const COLUMNAS = 20;
const MAX_INTENTOS = 5;

let tesoroFila;
let tesoroColumna;
let intentos;

const tablero = document.getElementById("tablero");
const mensaje = document.getElementById("mensaje");
const intentosTexto = document.getElementById("intentos");

const filaInput = document.getElementById("fila");
const columnaInput = document.getElementById("columna");

const buscarBtn = document.getElementById("buscarBtn");
const reiniciarBtn = document.getElementById("reiniciarBtn");

function crearTablero() {

    tablero.innerHTML = "";

    for(let i = 0; i < FILAS * COLUMNAS; i++) {

        const celda = document.createElement("div");
        celda.classList.add("celda");

        tablero.appendChild(celda);
    }
}

function actualizarIntentos() {

    intentosTexto.textContent =
        `Intentos usados: ${intentos} / ${MAX_INTENTOS}`;
}

function reiniciarJuego() {

    intentos = 0;

    tesoroFila = Math.floor(Math.random() * FILAS) + 1;
    tesoroColumna = Math.floor(Math.random() * COLUMNAS) + 1;

    crearTablero();

    mensaje.textContent =
        "Juego reiniciado. Empieza la búsqueda.";

    actualizarIntentos();

    filaInput.value = "";
    columnaInput.value = "";
}

function buscarTesoro() {

    if(intentos >= MAX_INTENTOS){
        return;
    }

    const fila = parseInt(filaInput.value);
    const columna = parseInt(columnaInput.value);

    if(
        isNaN(fila) ||
        isNaN(columna) ||
        fila < 1 ||
        fila > FILAS ||
        columna < 1 ||
        columna > COLUMNAS
    ){
        alert("Ingrese valores entre 1 y 20.");
        return;
    }

    intentos++;

    const indice =
        (fila - 1) * COLUMNAS + (columna - 1);

    const celda = tablero.children[indice];

    if(
        fila === tesoroFila &&
        columna === tesoroColumna
    ){

        celda.classList.add("tesoro");

        mensaje.textContent =
            `🎉 ¡Encontraste el tesoro en (${fila}, ${columna})!`;

        actualizarIntentos();
        return;
    }

    celda.classList.add("fallo");

    const distancia =
        Math.abs(fila - tesoroFila) +
        Math.abs(columna - tesoroColumna);

    mensaje.textContent =
        `No está ahí. Distancia aproximada: ${distancia}`;

    actualizarIntentos();

    if(intentos >= MAX_INTENTOS){

        const indiceTesoro =
            (tesoroFila - 1) * COLUMNAS + (tesoroColumna - 1);

        tablero.children[indiceTesoro]
            .classList.add("tesoro");

        mensaje.textContent =
            `❌ Se acabaron los intentos. El tesoro estaba en (${tesoroFila}, ${tesoroColumna}).`;
    }
}

buscarBtn.addEventListener("click", buscarTesoro);
reiniciarBtn.addEventListener("click", reiniciarJuego);

reiniciarJuego();