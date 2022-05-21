// Las cadenas de caracteres se definen entre comillas dobles o simples. 
var nombre = "Alan"
var apellido = "Turing"
var cadena = "Soy una cadena de caracteres 'con comillas'"
var escapar = "Soy una cadena que escapa a \"las comillas\""
console.log(cadena + " -- " + escapar)

// Concatenar valores de cadenas de caracteres
console.log(nombre + " " + apellido)

// Sequencias de escape
var texto = "Ahora empezara una linia nueva\nTambien un retorno de carro____ \r ademas de una tabulacion \t --->"
console.log(texto)

var nuevaCadena = "Aqui haremos un retroceso\b Y un salto de página\f "
console.log(nuevaCadena)

// Cadenas con variables
var verbo = "programar"

var mensaje = "Estoy aprendiendo a " + verbo
console.log(mensaje)

nombre += apellido

console.log(nombre)

// Longitud de una cadena
var numLetras = "Vamos a contar cuantos caractares contiene esa cadena incluidos los espacios"
console.log(numLetras.length + " caracteres")

// Indices de la cadena
var lenguajeDeProgramacion = "JavaScript"
console.log("Indice 2 de la palabrar JavaScript: " + lenguajeDeProgramacion[2])

// Inmutabilidad de las cadenas. No se pueden modificar se tiene que cambiar la cadena completa
var laCadena = "Jola Mundo"
laCadena[0] = "H"
console.log(laCadena + " No ha hecho la modificacion y lanza un error")

var unaCadena = "JavaScript"
console.log(unaCadena[0])
console.log(unaCadena[1])
console.log(unaCadena[2])
console.log(unaCadena[3])
console.log(unaCadena[4])
console.log(unaCadena[5])
console.log(unaCadena[6])
console.log(unaCadena[7])
console.log(unaCadena[8])
console.log(unaCadena[9])

// El último índice siempre es longitud -1 
var chain = "JavaScript"
console.log("ültimo caracter de la cadena " + chain[chain.length - 1])

// 