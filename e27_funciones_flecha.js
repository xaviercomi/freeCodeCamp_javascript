// Crear funciones anonimas (sin nombre)
// Son muy utiles cuando queremos pasarlas como argumento a otra funcion

const fecha = function () {
  return new Date();
};

console.log(fecha());

// Convertir a funcion flecha
const fechaArrow = () => new Date();

console.log(fechaArrow());

// Usando parametros

const sumarTres = (x) => x + 3;
// Podemos llamar a la función con el nombre de la variable a la que esta asignada
console.log(sumarTres(5));

// Funcion para concatenar arreglos
const concatenarArreglos = (arreglo1, arreglo2) => arreglo1.concat(arreglo2);
console.log(concatenarArreglos([1, 2], [3, 4, 5]));

// Si la funcion tiene mas de una linia requiere poner las llaves

// Definir valores por defecto a los parametros
const incrementar = (num, valor = 1) => num + valor;
console.log(incrementar(3, 5));
console.log(incrementar(3));
