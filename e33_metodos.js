const persona = {
  nombre: "Isabel",
  presentarse: function() { // Si el valor una propiedad es una función se denomina "método"
    return `¡Hola! Mi nombre es ${this.nombre}.`; // This se refiere al objeto (persona) con el estamos trabajando
  }
};

// La llamada se hace de forma habitual a las funciones
console.log(persona.presentarse())

// Se puede eliminar la palabrar function