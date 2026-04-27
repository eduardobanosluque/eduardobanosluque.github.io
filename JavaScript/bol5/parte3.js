// ACTIVIDAD 1
function actividad1(){

let nombre=document.getElementById("nombre").value;
let apellidos=document.getElementById("apellidos").value;
let edad=parseInt(document.getElementById("edad").value);

let nacimiento=2026-edad;

if(edad>=18){
document.getElementById("res1").innerHTML=
nombre+" "+apellidos+
" nació en "+nacimiento+
". "+nombre+" tiene "+edad+
" años y es mayor de edad";
}
else{
document.getElementById("res1").innerHTML=
nombre+" "+apellidos+
" nació en "+nacimiento+
". "+nombre+" tiene "+edad+
" años y es menor de edad";
}

}

// ACTIVIDAD 2
function actividad2(){

let num=parseInt(document.getElementById("num2").value);

if(num%2==0){
document.getElementById("res2").innerHTML=
"El número "+num+" es divisible por 2";
}
else{
document.getElementById("res2").innerHTML=
"El número "+num+" no es divisible por 2";
}

}

// ACTIVIDAD 3
function actividad3(){

let estaciones=[
"Invierno",
"Primavera",
"Verano",
"Otoño"
];

let n=parseInt(document.getElementById("num3").value);

document.getElementById("res3").innerHTML=
"<b>"+estaciones[n-1]+"</b>";

}

// ACTIVIDAD 4 SWITCH
function actividad4(){

let mes=document.getElementById("mes4").value.toLowerCase();

let estacion="";

switch(mes){

case "diciembre":
case "enero":
case "febrero":
estacion="Invierno";
break;

case "marzo":
case "abril":
case "mayo":
estacion="Primavera";
break;

case "junio":
case "julio":
case "agosto":
estacion="Verano";
break;

case "septiembre":
case "octubre":
case "noviembre":
estacion="Otoño";
break;

default:
estacion="Mes incorrecto";

}

document.getElementById("res4").innerHTML=estacion;

}

// ACTIVIDAD 5 IF
function actividad5(){

let mes=document.getElementById("mes5").value.toLowerCase();

let estacion="";

if(
mes=="diciembre" ||
mes=="enero" ||
mes=="febrero"
){
estacion="Invierno";
}

else if(
mes=="marzo" ||
mes=="abril" ||
mes=="mayo"
){
estacion="Primavera";
}

else if(
mes=="junio" ||
mes=="julio" ||
mes=="agosto"
){
estacion="Verano";
}

else if(
mes=="septiembre" ||
mes=="octubre" ||
mes=="noviembre"
){
estacion="Otoño";
}

else{
estacion="Mes incorrecto";
}

document.getElementById("res5").innerHTML=estacion;

}

// ACTIVIDAD 6 IVA
function actividad6(){

let nombre=document.getElementById("nombre6").value;

let dinero=parseFloat(
document.getElementById("dinero6").value
);

let total;

if(dinero>=5000){
total=dinero*1.10;
}
else if(dinero>3000){
total=dinero*1.15;
}
else{
total=dinero*1.21;
}

document.getElementById("res6").innerHTML=
nombre+
" debe pagar "+
total.toFixed(2)+
" euros";

}

// ACTIVIDAD 7
function actividad7(){

let nombre=
document.getElementById("nombre7").value;

let provincia=
document.getElementById("provincia7").value;

let pueblo=
document.getElementById("pueblo7").value;

document.getElementById("res7").innerHTML=
nombre+
", eres de "+
provincia+
" de "+
pueblo;

}

//ACTIVIDAD 8 CONVERSOR

function kmMillas(){

let km=
parseFloat(
document.getElementById("km").value
);

let millas=km*0.621371;

document.getElementById("res8").innerHTML=
km+" km son "+
millas.toFixed(2)+
" millas";

}

function millasKm(){

let millas=
parseFloat(
document.getElementById("millas").value
);

let km=millas*1.60934;

document.getElementById("res8").innerHTML=
millas+" millas son "+
km.toFixed(2)+
" km";

}