function procesarEdad() {
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const edad = parseInt(document.getElementById("edad").value);
    const divResultado = document.getElementById("resultado");

    if (!nombre || !apellidos || isNaN(edad)) {
        alert("Por favor, rellene todos los campos.");
        return;
    }

    const anioActual = new Date().getFullYear();
    const anioNacimiento = anioActual - edad;
    let mensaje = "";

    if (edad >= 18) {
        mensaje = `${nombre} ${apellidos} tiene ${edad} años y es mayor de Edad (Año de nacimiento: ${anioNacimiento}).`;
    } else {
        mensaje = `${nombre} ${apellidos} tiene ${edad} años y es menor de Edad (Año de nacimiento: ${anioNacimiento}).`;
    }

    divResultado.innerHTML = mensaje;
    divResultado.style.display = "block";
}