// Los ciclos (loops) WHILE se utilizan cuando no sabemos cuantas veces vamos a repetir una tarea 
var i = 0

while (i <= 3) {
    console.log("Hola mundo!")
    i++
}

// Rellenando un arreglo
var miArreglo = []
var j = 0
console.log(miArreglo)

while (j <= 10) {
    miArreglo.push(j)
    j++
}

console.log(JSON.stringify(miArreglo))

// Eliminar elementos de un arreglo
var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(JSON.stringify(numeros))

while (numeros.length > 4) {
    numeros.pop()
}

console.log(JSON.stringify(numeros))
