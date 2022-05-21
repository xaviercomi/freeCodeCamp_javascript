// Permite crear funciones mas versatiles
// El operador rest convierte todos los argumentos en un array
function miFuncion(a, b, c, d) {
  console.log();
}

function miFuncionRest(...args) {
  console.log(args.length);
  return args;
}

console.log(miFuncionRest(1, 2, 3, 4, 5, 6));
console.log(miFuncionRest(7, 8, 9));

// El metodo reduce suma todos los elementos de un arreglo
// y retorna el resultado
//  Aqui pasamos una función flecha como argumento
const sumar = (...args) => {
  return args.reduce((a, b) => a + b, 5);
};
console.log(sumar(5, 5, 5, 5, 5, 5));
