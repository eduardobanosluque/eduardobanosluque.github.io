// Diseños vectoriales (SVG) generados por código (evita tener que descargar imágenes)
const bombillaApagadaSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 150">
    <path d="M50,10 A35,35 0 0,1 85,45 C85,65 70,75 65,90 L35,90 C30,75 15,65 15,45 A35,35 0 0,1 50,10 Z" fill="#eaeaea" stroke="#aaaaaa" stroke-width="2"/>
    <path d="M40,90 L43,60 L48,65 L52,65 L57,60 L60,90" fill="none" stroke="#888888" stroke-width="1.5"/>
    <rect x="35" y="90" width="30" height="8" rx="2" fill="#aaaaaa" stroke="#777777"/>
    <rect x="35" y="98" width="30" height="8" rx="2" fill="#999999" stroke="#666666"/>
    <path d="M42,106 L58,106 L50,115 Z" fill="#444444"/>
</svg>`;

const bombillaEncendidaSVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 150">
    <path d="M50,10 A35,35 0 0,1 85,45 C85,65 70,75 65,90 L35,90 C30,75 15,65 15,45 A35,35 0 0,1 50,10 Z" fill="#ffd700" stroke="#d4af37" stroke-width="2"/>
    <path d="M40,90 L43,60 L48,65 L52,65 L57,60 L60,90" fill="none" stroke="#ff4500" stroke-width="2" stroke-linecap="round"/>
    <rect x="35" y="90" width="30" height="8" rx="2" fill="#aaaaaa" stroke="#777777"/>
    <rect x="35" y="98" width="30" height="8" rx="2" fill="#999999" stroke="#666666"/>
    <path d="M42,106 L58,106 L50,115 Z" fill="#444444"/>
</svg>`;

// Captura de elementos del DOM
const contenedorBombilla = document.getElementById('espacioBombilla');
const botonInterruptor = document.getElementById('btnInterruptor');

// Estado inicial: Bombilla apagada por defecto
let estaEncendida = false;
contenedorBombilla.innerHTML = bombillaApagadaSVG;

// Intercambio de estados mediante un único botón
botonInterruptor.addEventListener('click', () => {
    if (!estaEncendida) {
        // Encender la bombilla y cambiar el texto a Apagar
        contenedorBombilla.innerHTML = bombillaEncendidaSVG;
        contenedorBombilla.classList.add('encendida');
        botonInterruptor.textContent = 'Apagar';
        estaEncendida = true;
    } else {
        // Apagar la bombilla y cambiar el texto a Encender
        contenedorBombilla.innerHTML = bombillaApagadaSVG;
        contenedorBombilla.classList.remove('encendida');
        botonInterruptor.textContent = 'Encender';
        estaEncendida = false;
    }
});