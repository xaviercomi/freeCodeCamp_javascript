// Javascript es cap sensitive car no es igual que Car

// Funcion que muestra por consola un valor
console.log("Hola mundo!")

// Declarar variables. Operador de asignación = asigna valores a las variables. 
var a = "Xavier" // tipo string
var b = true // boolean
var c = 25 // number
var d = { name: "Xavier" } // object


var e = Symbol("foo") // symbol con un argumento de tipo string que és la descripción del simbolo.
                      // sus valores son unicos e inmutables. Pueden ser utilizados como identificadores
                      // de las propiedades de los objetos. 
var f = null // es un valor nulo

console.log(a)
console.log(b)
console.log(d)

// Convencion para nombrar variable camelCase miVariable
var miNombre = "Xavier"

// variables sin un valor "undefine" no inicializadas
var sinValor; //undefined que no esta asignado ningun valor
console.log(sinValor)
// asignamos un valor 
a = 10 // con el operador de asignación

// asignamos un valor con otra variable
var z = 5
var x = z

console.log(z + "---" + x) // concatenando valores 

var g = 5
var e

e = g

console.log(g + e) // sumando variables




