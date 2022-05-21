// Objetos anidados
var miReceta = {
    descripcion: "postre",
    coste: 15.6,
    ingredientes: {
        masa: {
            harina: "100 grs",
            sal: "10 grs",
            agua: "50 ml"
        },
        cobertura: {
            azucar: "120 grs",
            chocolate: "120 grs",
            mantequilla:  "200 grs"
        }
    }
}
// Accediendo a propiedades principales
console.log(miReceta.descripcion)
// Accediendo al objeto anidado
console.log(miReceta.ingredientes.masa)
// Accediendo al segundo nivel
console.log(miReceta.ingredientes.cobertura["azucar"])
console.log(miReceta.ingredientes.cobertura["mantequilla"])
console.log(miReceta.ingredientes["masa"].harina)
console.log(miReceta.ingredientes["cobertura"]["mantequilla"])