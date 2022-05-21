// Se ejecutara el codigo dentro de la condición si esta se cumple. 
var x = 5

if ( x > 2) {
    console.log("La condición es verdadera.")
}

var estacion = "Invierno"

if (estacion === "Verano") {
    console.log("Este condicion no se ejecuta")
}

// clausula "else" Opción a la condicion
if (estacion === "Verano") {
    console.log("Estamos en Verano")
} else {
    console.log("Estamos en Invierno!")
}

// Clausula "else if" para utilizar diferentes condiciones si hay varias que sean verdaderas se ejecutara solo la primera

function clasificaValor(valor) {
    if (valor % 2 === 0) {
        console.log("Divisible entre 2.")
    } else if (valor % 3 === 0) {
        console.log("Divisible entre 3")
    } else if (valor === 2) {
        console.log("Este numero és un dos")
    } else {
        console.log("No es divisible entre las opciones")
    }
}

clasificaValor(2)
clasificaValor(15)
clasificaValor(7)

