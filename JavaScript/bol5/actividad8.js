function convertirUnidades() {
    const valor = parseFloat(document.getElementById("valor").value);
    const tipo = document.getElementById("tipoConversion").value;
    const divResultado = document.getElementById("resultado");
    
    // Constante de conversión provista en el boletín
    const FACTOR_MILLA = 1.60934;

    if (isNaN(valor) || valor < 0) {
        alert("Por favor, introduzca una distancia válida.");
        return;
    }

    let calculado = 0;
    let frase = "";

    if (tipo === "kmAMillas") {
        calculado = valor / FACTOR_MILLA;
        frase = `${valor} Kilómetros equivalen a <strong>${calculado.toFixed(5)}</strong> Millas.`;
    } else {
        calculado = valor * FACTOR_MILLA;
        frase = `${valor} Millas equivalen a <strong>${calculado.toFixed(5)}</strong> Kilómetros.`;
    }

    divResultado.innerHTML = frase;
    divResultado.style.display = "block";
}