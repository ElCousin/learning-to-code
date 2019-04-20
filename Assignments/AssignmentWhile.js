//Configuraciones
let fueradeRango=false
let contadorCiclo=0
//let coloresCiclo=["Amarillo","Morado","Verde","Rojo","Rosa","Amazul"]

//Ejecución
while (contadorCiclo<6)
{
    if (contadorCiclo==5)
    {
        fueradeRango=true
        if (fueradeRango=true)
        {
            console.log(`${contadorCiclo+1}: <- No sepo este número :'(`)
            break
        }
    }
    else
    {
        console.log(`${contadorCiclo+1}: Toy chiquito y no'más me sabo 5 números`)
    }
    contadorCiclo++
}

//Funciones
//function coloresCiclo(message)
//{
//    console.log()
//}