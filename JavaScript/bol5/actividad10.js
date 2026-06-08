function compararPalabrasAlert() {
    const p1 = document.getElementById("palabra1").value.trim();
    const p2 = document.getElementById("palabra2").value.trim();

    if (!p1 || !p2) {
        alert("Rellene las dos palabras para poder procesar la comparación.");
        return;
    }

    // Requerimiento explícito: Devolver mediante un alert
    if (p1.length > p2.length) {
        alert(`La palabra "${p1}" es más larga con ${p1.length} caracteres (frente a los ${p2.length} de "${p2}").`);
    } else if (p2.length > p1.length) {
        alert(`La palabra "${p2}" es más larga con ${p2.length} caracteres (frente a los ${p1.length} de "${p1}").`);
    } else {
        alert(`Ambas palabras ("${p1}" y "${p2}") tienen el mismo tamaño: ${p1.length} caracteres.`);
    }
}