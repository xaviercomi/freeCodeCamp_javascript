// Valores booleanos true y false
// Operador de igualdad
console.log(5 == 6)
console.log(5 == 5) 
console.log("Hola" == "Hola")
console.log("Hola" == "hola")
console.log([1, 2, 3] == [1, 2, 3]) // Es false porque no compara los elementos de los arreglos si no que los arreglos sean el mismo objeto en la memoria

// Operador de igualdad estricta
console.log(9 == 9)
console.log(9 == "9") // Los convierte a string por eso devuelve true
console.log(9 === "9") // Tambien verifica el tipo de datos y no los convierte a string
console.log(9 === 9)

// Operador <<NOT EQUAL TO>> TO desigualdad y desigualdad estricta
console.log(9 != 6) // true
console.log(9 != 9) // false
console.log(9 !== 9) // false
console.log(9 !== "9") // true

// Retornar valores booleanos desde una funcion 
function esMenorQue(a, b) {
    return  a < b
}

console.log("La función retorna: " + esMenorQue(3, 5))