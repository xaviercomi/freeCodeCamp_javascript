const persona = {
  nombre: "Harry Potter",
  edad: 25,
  altura: 1.70
}

/*
 Para asignar los valores de las propiedades
 a variables tendriamos que hacer:
 const nombre = persona.nombre
 const edad = persona.edad
 const altura = persona.altura
*/

// Con el nuevo standar ES6

const { nombre, edad, altura } = persona

console.log(nombre, edad, altura)

// Ex.

const coordenadas = {
  x: 4,
  y: 6,
  z: 8
}

const { x, y, z } = coordenadas

console.log(x)
console.log(y)
console.log(z)

// Utilizando objetos anidados

const usuario = {
  johnDoe: {
    puntos: 27,
    correo: "jon@test.com"
  }
}

const { johnDoe: { puntos, correo } } = usuario
console.log(usuario)

const PRONOSTICO_LOCAL = {
  ayer: {
    minima: 25,
    maxima: 30
  },
  hoy: {
    minima: 26,
    maxima: 31
  },
  mañana: {
    minima: 27,
    maxima: 32
  }
}

const {hoy: {minima: minimaHoy, maxima: maximaHoy}, mañana: {minima: minimaMañana, maxima: maximaMañana}} = PRONOSTICO_LOCAL
console.log(minimaHoy, maximaHoy, minimaMañana, maximaMañana)

// Desestructuracion arreglos
var a
var b
var c

[a, b, , , c] = [1, 2, 3, 4, 5, 6] // Las comas representan elemento a evitar

console.log(a)
console.log(b)
console.log(c)

// Intercanviar valores de las variables
console.log("___________________________")
var num1 = 5;
var num2 = 10;

[num2, num1] = [num1, num2];

console.log("num1: " + num1);
console.log("num2: " + num2);

// Destructurar con el operador rest

var a;
var b;
var array;

[a, b, ...array] = [1, 2, 3, 4, 5, 6]

console.log(a)
console.log(b)
console.log(array)

const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const [, , , ...nuevoArreglo] = newArray

console.log("Array sin los tres primeros elementos " + nuevoArreglo)

