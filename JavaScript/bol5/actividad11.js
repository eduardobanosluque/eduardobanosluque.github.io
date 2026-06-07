function calcularSumatorio() {
    const n = parseInt(document.getElementById("numeroN").value);
    const divResultado = document.getElementById("resultado");

    if (isNaN(n) || n < 0) {
        alert("Por favor, introduce un número entero mayor o igual a 0.");
        return;
    }

    let sumaTotal = 0;
    // Bucle clásico acumulador para el sumatorio matemático
    for (let i = 0; i <= n; i++) {
        sumaTotal += i;
    }

    divResultado.innerHTML = `El sumatorio total acumulado desde 0 hasta ${n} es: <strong>${sumaTotal}</strong>`;
    divResultado.style.display = "block";
}