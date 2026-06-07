function calcularEstacionIf() {
    const mes = document.getElementById("mesIf").value.trim().toLowerCase();
    const divResultado = document.getElementById("resultado");

    if (!mes) {
        alert("Por favor, escriba un mes.");
        return;
    }

    let estacion = "";

    if (mes === "diciembre" || mes === "enero" || mes === "febrero") {
        estacion = "Invierno";
    } else if (mes === "marzo" || mes === "abril" || mes === "mayo") {
        estacion = "Primavera";
    } else if (mes === "junio" || mes === "julio" || mes === "agosto") {
        estacion = "Verano";
    } else if (mes === "septiembre" || mes === "octubre" || mes === "noviembre") {
        estacion = "Otoño";
    } else {
        estacion = "Mes no reconocido";
    }

    divResultado.innerHTML = `Estación (Filtrada por If): ${estacion}`;
    divResultado.style.display = "block";
}