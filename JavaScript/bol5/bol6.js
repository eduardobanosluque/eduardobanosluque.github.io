// Captura de elementos del DOM
const selectPares = document.getElementById('colorPares');
const selectImpares = document.getElementById('colorImpares');

// Función para aplicar los colores dinámicamente a las filas mediante estilos CSS inyectados
function aplicarColores(colorPar, colorImpar) {
    // Buscamos todas las filas del cuerpo de la tabla
    const filas = document.querySelectorAll('#tablaRecetas tbody tr');
    
    filas.forEach((fila, index) => {
        // El index empieza en 0 (fila 1 = impar, fila 2 = par, etc.)
        if ((index + 1) % 2 === 0) {
            fila.style.backgroundColor = colorPar;
        } else {
            fila.style.backgroundColor = colorImpar;
        }
    });
}

// Función para guardar los valores actuales en el Local Storage del navegador
function guardarEnLocalStorage() {
    localStorage.setItem('colorFilasPares', selectPares.value);
    localStorage.setItem('colorFilasImpares', selectImpares.value);
}

// Eventos para detectar cuando el usuario cambia de color en los desplegables
selectPares.addEventListener('change', () => {
    aplicarColores(selectPares.value, selectImpares.value);
    guardarEnLocalStorage();
});

selectImpares.addEventListener('change', () => {
    aplicarColores(selectPares.value, selectImpares.value);
    guardarEnLocalStorage();
});

// Al cargar la página (o reabrir la pestaña), recuperamos los datos si existen
window.addEventListener('DOMContentLoaded', () => {
    // Intentamos obtener los colores guardados previamente
    const colorParGuardado = localStorage.getItem('colorFilasPares');
    const colorImparGuardado = localStorage.getItem('colorFilasImpares');

    // Si existen datos guardados, actualizamos los selectores del menú con esos valores
    if (colorParGuardado) {
        selectPares.value = colorParGuardado;
    }
    if (colorImparGuardado) {
        selectImpares.value = colorImparGuardado;
    }

    // Ejecutamos la función para que la tabla pinte los colores correspondientes
    aplicarColores(selectPares.value, selectImpares.value);
});