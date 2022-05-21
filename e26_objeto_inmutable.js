// No permitir que se pueda cambiar la estructura de un objeto

let colores = {
    verde: "#10e04b",
    azul: "1b50e0",
    negro: "#000000",
    blanco: "#ffffff"
}

// Utilizamos el metodo freeze
// No permite agregar propiedades o modificar valores

Object.freeze(colores)

// lo convierte en read-only

console.log(colores)