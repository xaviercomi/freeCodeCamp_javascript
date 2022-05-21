// Utilizamos el ciclo (loop) FOR cuando sabemos cuantas veces iteraremos sobre el codigo 
var miArreglo = []

for (let i = 0; i < 10; i += 2) {
    miArreglo.push(i + 5)
}

console.log(miArreglo)

// Valores impares
var arregloImpares = []

for (let i = 1; i < 20; i += 2) {
    arregloImpares.push(i)
}

console.log(arregloImpares)

// Iterar sobre un arreglo
var arreglo = [4, 6, 8, 2]

var total = 0;

for (let i = 0; i < arreglo.length; i++) {
    total += arreglo[i]
}

console.log(total)

var lenguajes = ["JavaScript", "Python", "Java"]

for (var i = 0; i < lenguajes.length; i++) {
    console.log(lenguajes[i].toUpperCase())
}

// Contar numeros pares en un arreglo
function contarNumerosPares(arreglo) {
    var total = 0
    
    for (var i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 == 0) {
            total++
        }
    }

    return total
}

console.log("El arreglo tiene " + contarNumerosPares([2, 4, 5, 6, 7, 8, 9, 10]) + " numeros pares")

// ciclos FOR anidados 
// Muy utiles para recorrer estructuras de datos multidimensionales
var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

for (var i = 0; i < miArreglo.length; i++) {
    for (var j = 0; j < miArreglo[i].length; j++) {
        console.log(miArreglo[i][j])
    }
    
}