// Los objetos Conjunto de propiedades relacionadas con valores

var miPerro = {
    "nombre": "Gino",
    "edad": 5,
    "peso": 6,
    "raza": "Beagle"
}

// Si las propiedades tienen una sola palabra pueden ir sin comillas

var miPerro = {
    nombre: "Gino",
    edad: 5,
    peso: 6,
    raza: "Beagle"
}

// Javascript siempre convertira todo a cadenas

var  miObjeto = {
    1: "uno",
    2: 2,
    3: "tres",
    "numero de corte": 4
}

// Se accede a los valores y la propiedades con la notación de punto
console.log(miPerro.nombre)

// Acceder con la notacion de corchetes para propiedades con mas de una palabra o numeros o variables
console.log(miObjeto[2])
console.log(miObjeto["numero de corte"])

// Acceder a propiedades con variables

var resultado = {
    1: "nora",
    2: "gino",
    3: "estef",
    4: "kiara"
}

var posicion = 4

console.log(resultado[posicion])