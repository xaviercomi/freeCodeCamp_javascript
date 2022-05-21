// Funcion que retorna una numero aleatorio
function generarAleatorio() {
    return Math.random()                // MATH Objecto que devuelve funciones y constantes matemáticas
                                        // random genera un valor aleatorio entre 0 y 1 (no incluido)
}

console.log(generarAleatorio())
console.log(generarAleatorio())
console.log(generarAleatorio())
console.log(generarAleatorio())

console.log("___________" + Math.random())

var numeroAleatorio = Math.random()
console.log(numeroAleatorio)

console.log("________________________")
// Generar numeros aleatorios enteros

var numeroAleatorioEntre0y19 = Math.floor(Math.random() * 20)
console.log(numeroAleatorioEntre0y19)

console.log("________________________")

function generarEnterosAleatorios(limiteSuperior) {
    return Math.floor(Math.random() * limiteSuperior)
}

for (i = 0; i < 10; i++) {
    console.log(generarEnterosAleatorios(20))
}

console.log("________________________")
// Numeros aleatorios en un rango

function generaRangoAleatorio(limiteInferior, limiteSuperior) {
    return Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior 
}

for (let i = 0; i < 15; i++) {
    console.log(generaRangoAleatorio(3, 8))
}



