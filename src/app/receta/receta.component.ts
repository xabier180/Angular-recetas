import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {

  //atributos

  nombre: string;
  descripcion: string;
  likes: number;
  foto: string;
  isGlutenFree: boolean;
  cocinero: string;
  ingredientes: string[];
  show: boolean;

  constructor() {
    console.log('RecetaComponent constructor');
    this.nombre = 'Bokata de calamares';
    this.descripcion = 'Bocadillo típico madrileño de calamares a la romana con mayonesa y un buen chorro de limón.'
    this.likes = 334;
    this.foto = 'https://www.hogarmania.com/archivos/201411/bocadillo-calamares-xl-668x400x80xX.jpg';
    this.isGlutenFree = true; 
    this.cocinero = "Karlos Arguiñano";
    this.ingredientes = ['Calamares', 'Pan', 'Salsa Ali Oli', 'Limón'];
    this.show = false;
  }

  ngOnInit() {
    console.log('RecetaComponent ngOnInit');
  }

  sumarLike(){
    console.log('Click sumarLike');
    this.likes++;
  }

  mostrarIngredientes(){
    console.log('Click mostrarIngredientes');
  }

}
