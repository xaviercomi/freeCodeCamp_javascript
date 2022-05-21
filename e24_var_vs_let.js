// var permite declarar dos o mas veces la misma variable con el mismo o diferente valor
//priorizando el ultimo

var usuario = "Jan"
var usuario = "Jana"
var usuario = "Jano"
var usuario = "Jana"

console.log(usuario)

// let no permite declarar variables con el mismo nombre pero si modificar el valor
// prioriza el ultimo valor
let usuaria = "Jana"
// let usuaria =  "Jane"  no lo permite
usuaria = "Jane"

console.log(usuaria)

// Ámbito de var y let
// var pueden ser declarada de forma local o global
// let es mas restrictiva solo estara operativa en bloque que la contiene

for (var i = 0; i < 3; i++) {
    console.log(i)
}

console.log("var se puede utilizar fuera del ambito del ciclo for: " + i)

for (let j = 0; j < 3; j++) {
    console.log(i)
}

console.log(+ j) // Error. j no esta definida