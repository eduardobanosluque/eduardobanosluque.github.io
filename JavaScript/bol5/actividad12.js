function mostrarTablaRecetas() {
    // Array de objetos provisto en la práctica
    const recetas = [
        { id: 1, nombrereceta: "Salmorejo", ingredientes: "Tomate, aceite y pan" },
        { id: 2, nombrereceta: "Gachas", ingredientes: "Harina, agua y azucar" },
        { id: 3, nombrereceta: "Migas", ingredientes: "Pan, ajo y aceite" }
    ];

    const contenedor = document.getElementById("contenedorTabla");

    // Construcción de la cadena HTML estructurada
    let tablaHTML = `
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre Receta</th>
                    <th>Ingredientes</th>
                </tr>
            </thead>
            <tbody>
    `;

    recetas.forEach(receta => {
        tablaHTML += `
            <tr>
                <td>${receta.id}</td>
                <td>${receta.nombrereceta}</td>
                <td>${receta.ingredientes}</td>
            </tr>
        `;
    });

    tablaHTML += `
            </tbody>
        </table>
    `;

    contenedor.innerHTML = tablaHTML;
}