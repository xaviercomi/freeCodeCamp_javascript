// Busquedas en objetos para remplazar la sentencia switch
function elementosQuimicos(simbolo) {

    var simboloQuimico = {
        Al: "Aluminio",
        S: "Azufre",
        Cl: "Cloro",
        He: "Helio",
        B: "Boro",
        Li: "Litio"
    }
    return simboloQuimico[simbolo]

    var elementoQuimico = ""

    switch (simbolo) {
        case "Al":
            elementoQuimico = "Aluminio"
            break
        case "S":
            elementoQuimico = "Azufre"
            break
        case "Cl":
            elementoQuimico = "Cloro"
            break
        case "He":
            elementoQuimico = "Helio"
            break
        case "B":
            elementoQuimico = "Boro"
            break
        case "Li":
            elementoQuimico = "Litio"
            break
    }
    return elementoQuimico
}

console.log(elementosQuimicos("Al"))

// Verificar propiedades 
var miCuaderno = {
    color: "Verde",
    categoria: "3",
    precio: 4.56
}

console.log("El objeto cuaderno tiene la propiedad color: " + miCuaderno.hasOwnProperty("color"))

// Funcion que verificara las propiedades del objeto que recive como parametro
function verificarPropiedad(obj, propiedad) {
    if (obj.hasOwnProperty(propiedad)) {
        return "Propiedad: " + propiedad +" "+ "con valor: " + obj[propiedad] + " existe"
    } else {
        return "Propiedad no existente"
    }
}

console.log(verificarPropiedad(miCuaderno, "categoria"))
console.log(verificarPropiedad(miCuaderno, "tamaño"))

// Objetos complejos

var ordenesPizza = [
    {
        tipo: "margarita",
        tamaño: "individual",
        precio: 5.56,
        toppings: ["extra queso, chanpiñones, piña"],
        llevar: true,
    },
    {
        tipo: "cuatro quesos",
        tamaño: "familiar",
        precio: 6.75, 
        toppings: [],
        llevar: false,
    },
    {
        tipo: "napolitana",
        tamaño: "individual",
        precio: 6.56, 
        toppings: ["extra queso", "aceitunas"],
        llevar: true,
    }
]

console.log(ordenesPizza[0]["tipo"])
console.log(ordenesPizza[2].toppings)
console.log(ordenesPizza[2]["precio"])
console.log(ordenesPizza[1].tamaño)
console.log(ordenesPizza[0]["llevar"])
console.log(ordenesPizza[0]["toppings"])
console.log(ordenesPizza[2].tipo)
console.log(ordenesPizza[2]["toppings"])