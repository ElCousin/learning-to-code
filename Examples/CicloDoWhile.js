//Configuraciones
let yaLlegamos = false;
let countador = 0;

//ejecucion
do
{
    if (countador == 9) {
        yaLlegamos = true;
    }

    console.log(`${countador+1}:Ya llegamos?`);
    if (yaLlegamos) {
        console.log("Si");
    } else {
        if ((countador % 7) == 0 && countador != 0) {
            console.log("Ah, como chingas!");
        } else {
            console.log("No");
        } //fin else anidado
    } //fin else principal
    countador++;
}while (countador < 10)
