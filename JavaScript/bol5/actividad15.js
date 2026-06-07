// Instanciamos el objeto Map global para almacenar clave (DNI) -> valor (Nombre)
const agendaMap = new Map();

function guardarUsuarioAgenda() {
    const nombre = document.getElementById("agendaNombre").value.trim();
    const dni = document.getElementById("agendaDni").value.trim().toUpperCase();

    if (!nombre || !dni) {
        alert("Por favor, introduzca tanto el nombre como el DNI.");
        return;
    }

    // Almacenamos en el mapa
    agendaMap.set(dni, nombre);
    alert(`Usuario "${nombre}" registrado correctamente en la agenda.`);
    
    // Limpiamos los campos del formulario
    document.getElementById("agendaNombre").value = "";
    document.getElementById("agendaDni").value = "";
}

function listarUsuariosAgenda() {
    const salida = document.getElementById("salidaAgenda");

    if (agendaMap.size === 0) {
        salida.innerHTML = "<em>La agenda se encuentra vacía actualmente.</em>";
        salida.style.display = "block";
        return;
    }

    let listadoHTML = "<strong>Listado General de Usuarios:</strong><br><ol>";
    
    // Recorremos los elementos usando la estructura de iteración nativa for...of del Map
    for (const [dni, nombre] of agendaMap.entries()) {
        listadoHTML += `<li><strong>Nombre:</strong> ${nombre} &nbsp;|&nbsp; <strong>DNI:</strong> ${dni}</li>`;
    }
    
    listadoHTML += "</ol>";
    salida.innerHTML = listadoHTML;
    salida.style.display = "block";
}