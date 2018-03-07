/* Clase para encapsular los atributos de una receta */

export class RecetaDetalle {

    //atributos

    nombre: string;
    descripcion: string;
    likes: number;
    foto: string;
    isGlutenFree: boolean;
    ingredientes: string[];
    cocinero : string;

    //Solo es posible un constructor
    constructor( nombre: string,
        cocinero : string = 'Karlos Arguiñano',
        foto : string,
        descripcion : string
        ){
        console.log('Receta constructor');
        this.nombre = nombre;
        this.foto = foto;
        this.likes = 0;
        this.cocinero = cocinero;
        this.descripcion = descripcion;
        this.isGlutenFree = false;
        this.ingredientes = [];

    }

    addIngrediente( ingrediente : string ){
        this.ingredientes.push(ingrediente);
    }

  
}