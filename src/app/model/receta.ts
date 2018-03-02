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
        cocinero : string = 'Karlos Arguiñano'){
        console.log('Receta constructor');
        this.nombre = nombre;
        this.foto = 'assets/imgs/receta_marmitako.jpg';
        this.likes = 0;
        this.cocinero = cocinero;
        this.descripcion = 'La marmita de bonito (conocido también como marmita o sorropotún1​ en Asturias y Cantabria, marmitako en el País Vasco y marmite en Francia) es un plato basado en Thunnus alalunga (atún blanco o bonito del norte), cuyo origen se encuentra en los pescadores asturianos, cántabros y vascos (arrantzales en euskera). Se trata de un guiso de bonito con patatas, cebolla, pimiento y tomate, principalmente. En algunos lugares se sirve caliente en una cazuela de barro.';
        this.isGlutenFree = false;
        this.ingredientes = [];

    }

    addIngrediente( ingrediente : string ){
        this.ingredientes.push(ingrediente);
    }

  
}