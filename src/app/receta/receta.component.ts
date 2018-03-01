import { Component, OnInit } from '@angular/core';

import {Receta} from '../model/receta';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {

  //atributos


  receta: Receta;
  show: boolean;
  glyphicon: string;

  constructor() {
    console.log('RecetaComponent constructor');

    this.receta = new Receta('Marmitako', undefined);
    this.receta.addIngrediente('patatas');
    this.receta.addIngrediente('bonito');
    this.receta.addIngrediente('pimiento verde');
    this.receta.addIngrediente('aceite');
    this.receta.addIngrediente('sal');


    this.show = false;
    this.glyphicon = 'glyphicon-menu-down';
  }

  ngOnInit() {
    console.log('RecetaComponent ngOnInit');
  }

  sumarLike(){
    console.log('Click sumarLike');
    this.receta.likes++;
  }

  showIngredientes(){
    console.log('Click showIngredientes');
    this.show = !this.show;
    this.glyphicon = (this.show)?'glyphicon-menu-up':'glyphicon-menu-down';
  }
}
