function comprobarDivisibilidad() {
    const numeroInput = document.getElementById("numero").value;
    const numero = parseInt(numeroInput);
    const divResultado = document.getElementById("resultado");

    if (isNaN(numero) || numero < 1 || numero > 30) {
        alert("Por favor, introduce un número entero válido entre 1 y 30.");
        return;
    }

    if (numero % 2 === 0) {
        divResultado.innerHTML = `El número ${numero} es divisible por dos (Es Par).`;
    } else {
        divResultado.innerHTML = `El número ${numero} NO es divisible por dos (Es Impar).`;
    }

    divResultado.style.display = "block";
}