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