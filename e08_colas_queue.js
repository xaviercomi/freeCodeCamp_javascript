// Una cola (queue) és una estructura de datos abstracta con los elementos en orden
// Los nuevos elementos se añaden al final y los previos se retiran del principio de la cola.

function proximoEnLaFila(arreglo, numero) {
    arreglo.push(numero)
    return arreglo.shift()
}

var miArreglo = [1, 2, 3, 4, 5]

console.log("Antes: " + miArreglo)
console.log("Antes: " + JSON.stringify(miArreglo)) // convertir arreglo a cadena de caracteres con formato json

console.log("Numero eliminado: " + proximoEnLaFila(miArreglo, 6))


console.log("Despues: " + JSON.stringify(miArreglo))

