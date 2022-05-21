// Sentencia para estructura de condicionales

function clasificarValor(valor) {

    var respuesta

    switch (valor) {
        case 1: 
            respuesta = "Alpha"
            break
        case 2:
            respuesta = "Beta"
            break
        case 3:
            respuesta = "Gamma"
            break
        case 4:
            respuesta = "Delta"
            break
        default:
            respuesta = "Opcion no valida"
            break
    }

    return respuesta
}

console.log(clasificarValor(1))
console.log(clasificarValor(2))
console.log(clasificarValor(5))

// Utilizando string
function clasificarProducto(producto) {

    var precio

    switch (producto) {
        case "hamburguesa": 
            precio = 12 
            break
        case "pizza":
            precio = 10
            break
        case "helado":
            precio = 5
            break
        case "cola":
            precio = 2
            break
        default:
            precio = 0
            break
    }

    return precio
}

console.log(clasificarProducto("helado"))
console.log(clasificarProducto("cola"))
console.log(clasificarProducto("croqueta"))

// Senténcia Switch multiples casos
function clasificarVolumen(valor) {
    var volumen
    switch (valor) {
        case 1: 
            volumen = "volumen bajo"
            break
        case 2:
        case 3:
            volumen = "volumen medio"
            break
        case 4:
        case 5:
        case 6:
            volumen = "volumen alto"
            break
    }

    return volumen
}

console.log(clasificarVolumen(2))
console.log(clasificarVolumen(5))