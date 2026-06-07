let pantalla = document.getElementById("pantalla");
let operacionActual = "";
let reiniciarPantalla = false;

function agregarNumero(numero) {
    // Evitar poner varios puntos decimales seguidos
    if (numero === '.' && operacionActual.includes('.')) {
        // Solo bloquea si el último número ya tiene punto
        let ultimaParte = operacionActual.split(/[\+\-\*\/]/).pop();
        if (ultimaParte.includes('.')) return;
    }

    // Si acabamos de calcular un resultado, el siguiente número limpia la pantalla
    if (pantalla.textContent === "0" || reiniciarPantalla) {
        pantalla.textContent = numero;
        operacionActual = numero;
        reiniciarPantalla = false;
    } else {
        pantalla.textContent += numero;
        operacionActual += numero;
    }
}

function operar(operador) {
    if (operacionActual === "" && operador === "-") {
        // Permitir empezar con un número negativo
        pantalla.textContent = "-";
        operacionActual = "-";
        return;
    }
    
    // Si el último carácter ya es un operador, lo reemplaza para no duplicar (+*, /-, etc)
    let ultimoCarac = operacionActual.slice(-1);
    if (["+", "-", "*", "/"].includes(ultimoCarac)) {
        operacionActual = operacionActual.slice(0, -1) + operador;
        pantalla.textContent = operacionActual.replace(/\*/g, "×").replace(/\//g, "÷");
        return;
    }

    operacionActual += operador;
    // Cambiamos visualmente el asterisco y la barra por los caracteres elegantes de tu foto
    pantalla.textContent = operacionActual.replace(/\*/g, "×").replace(/\//g, "÷");
    reiniciarPantalla = false;
}

function limpiarPantalla() {
    operacionActual = "";
    pantalla.textContent = "0";
}

function borrarUltimo() {
    if (pantalla.textContent === "0" || pantalla.textContent === "Error") {
        return;
    }
    
    operacionActual = operacionActual.slice(0, -1);
    
    if (operacionActual === "") {
        pantalla.textContent = "0";
    } else {
        pantalla.textContent = operacionActual.replace(/\*/g, "×").replace(/\//g, "÷");
    }
}

function calcularResultado() {
    if (operacionActual === "") return;

    try {
        // eval realiza el cálculo matemático de la cadena directamente
        let resultado = eval(operacionActual);
        
        // Controlar si da infinito (ej. dividir entre 0)
        if (!isFinite(resultado)) {
            pantalla.textContent = "Error";
            operacionActual = "";
        } else {
            // Redondear a un máximo de 4 decimales para que no descuadre la pantalla
            resultado = parseFloat(resultado.toFixed(4));
            pantalla.textContent = resultado;
            operacionActual = resultado.toString();
        }
    } catch (error) {
        pantalla.textContent = "Error";
        operacionActual = "";
    }
    reiniciarPantalla = true;
}