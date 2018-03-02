/* Clase para encapsular los atributos de una receta */

export class Usuario {

    //atributos

    id : number;
    nombre: string;
    apellido: string;
    email: string;
    avatar: string;
    
    

    //Solo es posible un constructor
    constructor( nombre: string = 'Anónimo'
        ){
        console.log('Usuario constructor');
        this.id = -1;
        this.nombre = nombre;
        this.apellido = '';
        this.email = '';
        this.avatar = 'assets/imgs/avatar.jpg';
        
        

    }


  
}