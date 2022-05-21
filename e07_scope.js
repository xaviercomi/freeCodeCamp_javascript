// Variables globales
var global = "You can see me everywhere"

console.log(global)

function globalScope() {
    console.log(global)
}

console.log(global)

globalScope()

// Variable locales
localScope()

function localScope() {
    var local = "+++++++++++you can see me only here++++++++++++"
    console.log(local)
}

console.log(local)

/* 
Variables locales tienen prioridad dentro de las funciones 
que las contiene sobre variables globales con el mismo nombre
*/
