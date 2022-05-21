// Actualizar propiedades
var mochila = {
    "color": "azul",
    "tamaño": "mediano",
    "contenido": ["botella de agua", "cuaderno"]
}

console.log("La mochila es: " + mochila.color)
// Modificamos el color
mochila.color = "verde"
console.log("Ahora es: " + mochila.color)
// Modificamos los valores
console.log("La mochila tiene: " + mochila.contenido)
mochila.contenido.push("lapiz")
console.log("Y ahora tiene: " + mochila.contenido)

// Agregar nuevas propiedades
var curso = {
    titulo: "Aprende javascript",
    idioma: "Castellano",
    duracion: 30
}

console.log(curso)
curso.vistas = 34500
console.log(curso)

// Eliminar una propiedad
delete curso.duracion
console.log(curso)
