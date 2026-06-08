function contarCaracteres() {
    const texto = document.getElementById("textoCadena").value;
    const divResultado = document.getElementById("resultado");

    // Buscamos la propiedad nativa de Javascript .length solicitada
    const totalCaracteres = texto.length;

    divResultado.innerHTML = `La cadena introducida contiene exactamente <strong>${totalCaracteres}</strong> caracteres (incluyendo espacios).`;
    divResultado.style.display = "block";
}