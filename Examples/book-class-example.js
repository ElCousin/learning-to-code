var mensajeGlobal = "Hola a todos!!!!";
let myFriends = ["Alex", "Pablo", "Erwin", "Eric"];


class Book
{
    constructor(titulo,autor,isbn) //Esto se manda llamar, cuando se crea, I.e. en el "new Book()"
    {
        //Alicia en el Pais de las Wonders
        this.title = titulo;
        this.author = autor;
        this.isbn = new ISBN();
    }
}

class ISBN
{
    constructor()
    {
        this.EAN = undefined;
        this.group = undefined;
        this.publisher = undefined;
        this.title = undefined;
        this.checkDigit = undefined;
    }

    getRaw() 
    {
        return this.EAN+this.group+this.publisher+this.title+this.checkDigit;
    }
}

//Creacion de un OBJETO de TIPO/CLASE Book
let librin = new Book("Alicia en el Pais de las Wonders","Luisin Carolin"); 
// librin.isbn = "9788175257665"; //Ejemplo de una string cruda  de un ISBN
//Manipulacion, librin ya existse, entonces, modificaremos sus atributos
// el espacio en memoria, no ha cambiado, solo cambiaremos lo que hay dentro de la memoria
librin.isbn.EAN = "978";
librin.isbn.group = "81";
librin.isbn.publisher = "7525";
librin.isbn.title = "766"
librin.isbn.checkDigit = "5";

console.log(librin);
// console.log(librin.isbn.getRaw());


//JSON: JavaScript Object Notation
//Example de un Objeto al Vuelo
let aliceInWonderlandBook = 
{
    "title":"Alicia en las Wonders",
    "author":"Luisin Carolin"
}

//----
