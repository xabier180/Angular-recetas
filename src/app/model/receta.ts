/* Clase para encapsular los atributos de una receta */

export class Receta {

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
        cocinero : string = 'Anónimo'){
        console.log('Receta constructor');
        this.nombre = nombre;
        this.foto = 'assets/imgs/receta_default.jpg';
        this.likes = 0;
        this.cocinero = cocinero;
        this.descripcion = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, minus eum debitis facere dolorum autem laborum ipsum fuga temporibus veritatis expedita tempore eaque explicabo quasi amet eos iure libero rerum?';
        this.isGlutenFree = false;
        this.ingredientes = [];

    }

    addIngrediente( ingrediente : string ){
        this.ingredientes.push(ingrediente);
    }

  
}