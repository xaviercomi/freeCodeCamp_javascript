// Modificar un valor del arreglo
var array = [10, 20, 30]
array[0] = 40
console.log(array)

// Acceder a arreglos anidados
var arrayAnidado = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log("Resultado array anidado")
console.log(arrayAnidado[2][0])

// Agregar elementos al final de un arreglo con el metodo push()
var estaciones = ['Invierno', 'Verano', 'Otoño']
estaciones.push('Primavera')
console.log(estaciones)
// Quitar el último elemento del array
estaciones.pop()
console.log(estaciones)
// Quitar el primer elemento de un arreglo
estaciones.shift()
console.log(estaciones)
// Añadir un elemento al principio
estaciones.unshift('Invierno')
console.log(estaciones)

// Arreglos anidados complejos
var misPlantas = [
    {
        tipo: "flores",
        lista: [
            "rosas",
            "tulipanes",
            "dientes de león"
        ]
    },
    {
        tipo: "arboles",
        lista: [
            "abeto",
            "pino",
            "abedul"
        ]
    }
]
// Acceder a la primera flor
var primeraFlor = misPlantas[0].lista[0]
console.log(primeraFlor)