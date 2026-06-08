function mostrarGentilicio() {
    const nombre = document.getElementById("persona").value.trim();
    const selectProvincia = document.getElementById("provincia");
    const gentilicio = selectProvincia.value;
    const pueblo = document.getElementById("pueblo").value.trim();
    const divResultado = document.getElementById("resultado");

    if (!nombre || !pueblo) {
        alert("Por favor, complete todos los campos de texto.");
        return;
    }

    // Adaptamos el formato solicitado: "Juan, eres cordobés de Pozoblanco"
    divResultado.innerHTML = `${nombre}, eres ${gentilicio} de ${pueblo}.`;
    divResultado.style.display = "block";
}