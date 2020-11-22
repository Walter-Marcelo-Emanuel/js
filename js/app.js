"use strict" //uso strict mode --impide usar palabras reservadas.

//Pedir la hora.
var time = new Date();
console.log((time.getHours) + ":" +
    time.getHours() + ":" +
    time.getMinutes() + ":" +
    time.getSeconds());

//ejemplo variable global.

var nombre = "Walter";
console.log(nombre)

//ejemplo variable local.
function saludo() {
    let nombre = "Marcelo";
    console.log(nombre)

    let edad = 36;
    console.log(edad)

}
saludo();