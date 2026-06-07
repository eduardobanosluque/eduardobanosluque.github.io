function calcularEstacionSwitch() {
    const mesOriginal = document.getElementById("mes").value.trim().toLowerCase();
    const divResultado = document.getElementById("resultado");

    if (!mesOriginal) {
        alert("Por favor, escribe un mes.");
        return;
    }

    let estacion = "";

    switch (mesOriginal) {
        case "diciembre":
        case "enero":
        case "febrero":
            estacion = "Invierno";
            break;
        case "marzo":
        case "abril":
        case "mayo":
            estacion = "Primavera";
            break;
        case "junio":
        case "julio":
        case "agosto":
            estacion = "Verano";
            break;
        case "septiembre":
        case "octubre":
        case "noviembre":
            estacion = "Otoño";
            break;
        default:
            estacion = "Mes no válido o mal escrito";
    }

    divResultado.innerHTML = `Estación: ${estacion}`;
    divResultado.style.display = "block";
}