var x = 11
// Por lo menos se ejecuta una vez el codigo sin necesidad de evaluar la condicion
do {
    console.log("Solo una vez " + x)
    x++
} while (x < 10)

var x = 0
do {
    console.log("Evalua condicion " + x)
    x++
} while (x <= 10)

// Es muy util para pedir datos a los usuarios