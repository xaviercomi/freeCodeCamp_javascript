// Operador logico "Y" (AND) en JavaScript double ampersand (&&)
// Los dos operandos tiene que ser verdaderos para que la expresión sea verdadera
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)
// Variables 
var a = 8
console.log("A es mayor que 5 y menor que 10: " + ((a > 5) && (a < 10)))

// Operador logico "O" (OR) en JavaScript (||)
// La expresion es verdadera siempre que los dos operandos o alguno de ellos se verdadero
console.log("A es mayor que 20 o menor que 10: " + ((a > 20) || (a < 10)))

// Operador logico "NO" (NOT) en JavaScript (!)
// Lo utilizamos para negar una expresión
console.log(!(a > 5))
console.log(!(a < 5))
console.log(!true)
console.log(!false)