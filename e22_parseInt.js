//Convertir una cadena de caracteres que representa un numero a un numero entero

console.log(parseInt("5"))
console.log(parseInt("6.7")) // Solo muestra la parte entera sin redondear
console.log(parseInt("abc")) // Retorna NaN (Not a number)

// Especificar la base

console.log(parseInt("110111", 2)) // El segundo argumento representa base 2 (binario)
console.log(parseInt("3E0A", 16)) // Sistema hexadecimal
