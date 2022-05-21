/* 
Para proteger las propiedades de la clases
y sus valores, las haremos privadas añadiendo guión bajo.
Los métodos getters y setters nos permiten acceder y modificar
los valores de las propiedades.
*/

class Libro {
  constructor(autor, titulo) {
    this._autor = autor;
    this._titulo = titulo;
  }

  get autor() {
    return this._autor;
  }

  set autor(nuevoAutor) {
    this._autor = nuevoAutor;
  }
};

const libro = new Libro("Anonimo", "Las cartas de Nemo");
console.log(libro);
console.log(libro.autor);
console.log(libro.titulo) // no se puede acceder porque no tiene metodo getter

// Modificamos el autor mediante el método setter

libro.autor = "J.Clark"

console.log(libro)