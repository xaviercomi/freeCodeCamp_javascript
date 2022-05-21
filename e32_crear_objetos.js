const crearPersona = (nombre, edad, idioma) => {
  return {
    nombre: nombre,
    edad: edad,
    idioma: idioma
  };
};

console.log(crearPersona("Gino Smith", 28, "Italiano"));

// Forma mas concisa de crear objetos
const crearUsuario = (nombre, edad, idioma) => ({ nombre, edad, idioma });
console.log(crearUsuario("Gino Smith", 28, "Italiano"));

