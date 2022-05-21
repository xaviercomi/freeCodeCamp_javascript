// Permiten reutilizasr el codigo y estructurarlo mejor
function mostrarMensajes() {
    console.log("Hello world!")
}

mostrarMensajes()

// Funciones con paramatros que admiten argumentos (valores de los parametros) 
function suma(a,  b) {
    var suma = a + b
    console.log("El resultado de la suma es: " + suma)
}

suma(5, 3)

// Retornar valores

function sumar(a, b) {
    return a + b
}

console.log("La funcion retorna: " + sumar(5, 3))

// Las funciones siempre devuelven un valor (undefined)
function sumando(a, b) {
    console.log(a + b)
}

console.log(sumando(5, 3))
 
// Asignar el valor devuelto de una funcion
function restar(a, b) {
    return a - b
}

var resta = restar(5, 2)
console.log("Valor devuelto por la funcion restar asignado a la variable resta " + resta)

function crearCadenaConMeta(lenguajeDeProgramacion) {
    return "Mi meta es aprender " + lenguajeDeProgramacion
}

var miMeta = crearCadenaConMeta("JavaScript")
console.log(miMeta)

// El codigo Despues de la sentencia <return> es codigo inalcanzable
function calcularRaizCuadrada(num) {
    if (num < 0) {
        return undefined
    }  
    return Math.sqrt(num)
}

console.log(calcularRaizCuadrada(25))
console.log(calcularRaizCuadrada(-5))