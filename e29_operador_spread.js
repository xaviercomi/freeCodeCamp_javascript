// Descompone un arreglo en sus elementos 
const numeros = [1, 2, 3]

const sumar = (x, y, z) => {
  return x + y + z
}
// Nos evita este codigo:
// sumar(numeros[0], numeros[1], numeros[2])
console.log(sumar(...numeros))