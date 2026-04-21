// =============================
// ACTIVIDAD 1
// =============================

function actividad1(){

let h1 = document.getElementById("titulo");

// 1.1 Cambiar texto
h1.textContent = "DOM Manipulado";

// 1.2 Color rojo
h1.style.color = "red";

// 1.3 Añadir clase
h1.classList.add("titulo-activo");

}


// =============================
// ACTIVIDAD 2
// =============================

function actividad2(){

let p = document.getElementById("parrafo");

// 2.1 Añadir texto strong
p.innerHTML += " <strong>Texto añadido</strong>";

}

// =============================
// ACTIVIDAD 3
// =============================

function actividad3(){

// 3.1 Cambiar celda 1
 document.getElementById("celda1").textContent = "Nueva Celda 1";

// 3.2 Cambiar celda 2
 document.getElementById("celda2").textContent = "Nueva Celda 2";

}

// =============================
// ACTIVIDAD 4
// =============================

function actividad4(){

let fila = document.getElementById("fila");

let nueva = document.createElement("td");

nueva.textContent = "Nueva Celda";

fila.appendChild(nueva);

// Actividad 6 (Click en nueva celda)
nueva.onclick = function(){
this.style.backgroundColor = "yellow";
}

}

// =============================
// ACTIVIDAD 5
// =============================

function actividad5(){

let c1 = document.getElementById("celda1");
let c2 = document.getElementById("celda2");

c1.classList.toggle("celda-color");
c2.classList.toggle("celda-color");

}
// =============================
// ACTIVIDAD 6
// =============================


document.getElementById("celda1").onclick = function(){
this.style.backgroundColor = "yellow";
}

document.getElementById("celda2").onclick = function(){
this.style.backgroundColor = "yellow";
}