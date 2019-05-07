//Vamos a hacer un ciclo que se ejecute n veces y que cada m veces debe imprimir que es múltiplo de m
const nVeces = 40
const multiploM = 2
let numCiclos = 0

//Para la variable del nombre <XYZ> con un valor inicial de A, deberá existir una condición que nos diga cuándo se dejará de ejecutar el ciclo For, con incrementos de B
for (let contador=0; contador<nVeces; contador++)
{
    if (contador%multiploM==0)
    {
        console.log(`${contador} es múltiplo de ${multiploM}`)
        numCiclos++
    }
}

console.log(`En ${nVeces} iteraciones, existen ${numCiclos} múltiplos de ${multiploM}`)