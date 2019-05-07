//Esta es la definición de una función que calcula el área de un triángulo. Esta función necesita que se le proporcione una base (b) y una altura (h) y un 2
function areaTriangulo(base, altura)
{
    return((base*altura)/2)
}

//Se definen constantes(valores)
const base01 = 132
const altura01 = 54

//Se ejecuta la función según los parámetros definidos
// areaTriangulo(base01,altura01) Esto no hace nada

let resultadoTriangulo = areaTriangulo(base01,altura01)
console.log(resultadoTriangulo)

//Tarea:
//Meter readlinesync y pedir base y altura