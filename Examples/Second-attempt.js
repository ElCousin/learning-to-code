class specsPC
{
    constructor(MOBO,CPU,RAM,PSU,GPU,SSD,Case)
    {
        this.tarjeta = MOBO
        this.Proce = new CPU
        this.memoria = RAM
        this.poder = PSU
        this.video = GPU
        this.storage = SSD
        this.gabinete = Case  
    }
}

class CPU
{
    constructor() //¿Por qué los componentes del constructor quedan en blanco?
    {
        this.frecuencia = undefined //¿Qué implica el undefined? ¿No conozco siquiera si será valor numérico o string?
        this.frecuenciaTurbo = undefined
        this.nucleosFisicos = 2 //¿El valor va entrecomillado?
        this.nucleosLogicos = 4
        this.socket = undefined
        this.TDP = undefined
    }
}   

let gamerPC = new specsPC("Algo")
console.log(gamerPC)