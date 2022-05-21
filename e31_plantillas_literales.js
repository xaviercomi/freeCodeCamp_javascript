// Permiten integrar expresiones y variables dentro de cadenas de caracteres

var a = 6;
var b = 7;

console.log(`El valor de a es ${a} y el de b ${b}`)

var nombre = "Nora"
var edad = 25

console.log(`Mi nombre es ${nombre} y "tengo" ${edad} años`)

var miArreglo = [1, 2, 3, 4, 5, 6]

console.log(`El arreglo es ${JSON.stringify(miArreglo)}`)

var persona = {
  nombre: "Gino Gass",
  edad: 10
};

const saludo = `¡Hola! Mi nombre es ${persona.nombre} y tengo ${persona.edad} años.`;
console.log(saludo)
