// Este operador permite compactar un condicional en una sola linia
function retornarMenor(x, y) {
    if (x < y) {
        return x
    } else {
        return y
    }
}

console.log(retornarMenor(6, 8))

function retornarMenorCompacto(x, y) {
    return x < y ? x : y                // Si x es menor que y devuelve x si no y 
}

console.log(retornarMenorCompacto(5, 10))

// Utilizando variables

var a = 5
var b = 9

console.log(a > b ? a + 2 : b * 3)

// Multiples operadores ternarios

function compararNumeros(a, b) {
    if (a == b) {
        return "a y b son iguales"
    } else if (a > b) {
        return "a es mayor que b"
    } else {
        return "b es mayor que a"
    }
}

console.log(compararNumeros(5, 6)) 
console.log(compararNumeros(7, 6))
console.log(compararNumeros(5, 5))

function compararNumerosCompacto(a, b) {
    return a == b ? "a y b son iguales"
          : a > b ? "a es mayor que b"
          : "b es mayor que a"
}

console.log(compararNumerosCompacto(11, 27))
console.log(compararNumerosCompacto(27, 11))
console.log(compararNumerosCompacto(11, 11))