// Las clases (class) son como plantillas.
// Las clases nos permiten crear varios objetos con la misma estructura.

class TransbordadorEspacial {       // La convencion para defini clases es UpperCamelCase
  constructor(planeta) {            // Constructor es la funcion que se llama  
    this.planeta = planeta;          // automaticamente cuando creemos un objeto
  }
};

var zeus = new TransbordadorEspacial("Júpiter")
var apolo = new TransbordadorEspacial("Marte")

console.log(zeus.planeta)
console.log(apolo.planeta)

class Mascota {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
};

const miMascota = new Mascota("Poppy", 3);
const tuMascota = new Mascota("Note", 2);

console.log(miMascota.nombre);
console.log(tuMascota.nombre);

console.log(miMascota);
console.log(tuMascota);