function obtenerEstacionArray() {
    const estaciones = ["invierno", "primavera", "verano", "otoño"];
    const num = parseInt(document.getElementById("numeroEstacion").value);
    const divResultado = document.getElementById("resultado");

    if (isNaN(num) || num < 1 || num > 4) {
        alert("Introduce un número válido entre 1 y 4.");
        return;
    }

    // Restamos 1 porque los índices de los arrays empiezan en 0
    // Requerimiento explícito: en negrita (usamos tags strong)
    divResultado.innerHTML = `La estación correspondiente es: <strong>${estaciones[num - 1]}</strong>`;
    divResultado.style.display = "block";
}