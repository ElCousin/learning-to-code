var algoBienGlobal = "El Mundo Mundial";

class Enemy //La clase, el molde
{
    //Configuracion de un objeto
    //Definir propiedades
    //Un constructor requiere:
    //Nombre, Salud, Defensa, Mana
    constructor(name,health,defense,mana)
    {
        this.name = name;
        this.health = health;
        //Voy a decir que un enemigo tiene ataque, pero su valor inicial es 0
        this.attack = 0;
        console.log(`La defensa que mandaste de  ${this.name} es ${defense}`);
        console.log(`Y el mana es ${mana}`);
        //
        console.log(`El mensaje global es: ${algoBienGlobal}`);
    }

    //Acciones de propiedades
    //La accion de myNameIs requiere:
    // nada
    myNameIs()
    {   
        return this.name;
    }
}

class ArmedEnemy extends Enemy
{
    //name,health,attack
    constructor(weapon)
    {
        super();
        this.weapon=weapon;
    }
}



//Vamos a hacer un enemigo especifico.
//Esto es, un Ninja
let ninja = new Enemy("Jaimito");
////Se crea en tiempo de ejecucion el atributo de "weapon"
//No es la best practice, pero dependiendo del problema, tal vez sea buena idea usarlo.
ninja.weapon = "Shuriken"; 


let knight = new ArmedEnemy("Broadsword");


let bowser = new Enemy();

//Loggearlos en consola
//(name,health)
let dragon = new Enemy("Tiamat",10,5,500);
dragon.attack=9;
console.log(dragon);
dragon.myNameIs();

