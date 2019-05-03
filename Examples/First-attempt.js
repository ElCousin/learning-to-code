//Objetos
//1.	Definición:
//Es el conjunto de atributos que conforman o dotan de personalidad, de manera permanente mas no inamovible (pueden sumarse atributos, pueden configurarse los ya existentes).

//2.	Declaración:
//Se declara la existencia/apertura de un objeto mediante el comando 'class' (ej. class specsPC)
//Se dota de componentes (construye) mediante el comando 'constructor', y se señalan las propiedades de cada componente (se pueden definir valores mínimos)
//Mediante el comando 'let' crearemos una nueva variable que llamara al objeto/clase para modificar o llamar al constructor y los componentes que previamente definimos (ej., let gamerPC = new specsPC())
//Nombraremos los valores que componen/modifican las propiedades del objeto.
//Si queremos ver reflejado esto en pantalla, podemos recurrir al comando ‘console.log’ para llamar a nuestra variable (ej., console.log(gamerPC))

//3.	Sintaxis:

class specsPC
{
    constructor(MOBO,CPU,RAM,PSU,GPU,SSD,Case)
    {
        this.tarjeta = MOBO
        this.Proce = CPU
        this.memoria = RAM
        this.poder = PSU
        this.video = GPU
        this.storage = SSD
        this.gabinete = Case  
    }
}

let gamerPC = new specsPC ("Gigabyte AB350", "AMD Ryzen 1500", "Corsair Vengeance 3000 mHZ", "EVGA 750W Bronze",
"EVGA GTX 1070 Ti", "Samsung 850 EVO 250 GB", "NZXT S340 Elite")

console.log(gamerPC)