// Constantes: No podemos modificar el valor asignado
// Solo se puede releer no reasignar
// Al declararlas hay que asignarles valor

// const miConstante ____Error
const miConstante = 35
// const miConstante = 45 ____Error
console.log(miConstante)

// Calcular el area de un circulo

function calcularAreaCirculo(radio) {
    const PI = 3.14

    if (radio < 0) {
        return undefined
    }

    return PI * (radio ** 2) // Dos asteriscos es elevar la base (radio) al exponente (2) 
}

console.log(calcularAreaCirculo(25))

// Nota: si que podemos cambiar los valores de un array asignado a una constante
const MI_ARRAY = [1, 2, 3, 4]
MI_ARRAY[0] = 2

console.log(MI_ARRAY)