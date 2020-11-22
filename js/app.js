"use strict"

// hora
var time = new Date();
console.log((time.getHours) + ":" +
    time.getHours() + ":" +
    time.getMinutes() + ":" +
    time.getSeconds());

//ejemplo variable global

var nombre = "Walter";
console.log(nombre)

function saludo() {
    let nombre = "Marcelo";
    console.log(nombre)

    let edad = 36;
    console.log(edad)

}
saludo();