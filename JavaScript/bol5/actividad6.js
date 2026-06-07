function calcularTotalConIva() {
    const cliente = document.getElementById("cliente").value.trim();
    const importe = parseFloat(document.getElementById("importe").value);
    const divResultado = document.getElementById("resultado");

    if (!cliente || isNaN(importe) || importe < 0) {
        alert("Introduzca datos de facturación válidos.");
        return;
    }

    let porcentajeIva = 0;

    // Reglas de negocio del enunciado
    if (importe >= 5000) {
        porcentajeIva = 10;
    } else if (importe > 3000 && importe < 5000) {
        porcentajeIva = 15;
    } else {
        porcentajeIva = 21;
    }

    const impuesto = importe * (porcentajeIva / 100);
    const totalPagar = importe + impuesto;

    // Redondeamos el total a dos decimales
    divResultado.innerHTML = `Cliente: ${cliente}<br>IVA aplicado: ${porcentajeIva}%<br>Importe total a pagar: ${totalPagar.toFixed(2)} €`;
    divResultado.style.display = "block";
}