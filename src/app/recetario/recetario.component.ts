import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { RecetaDetalle } from '../model/recetaDetalle';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.scss']
})
export class RecetarioComponent implements OnInit {

  recetas_disponibles : Array<RecetaDetalle>;  //Array casteado a RecetaDetalle

  constructor() { 

    console.log('RecetarioComponent constructor');     

    this.recetas_disponibles = new Array<RecetaDetalle>();

  }

  ngOnInit() {

    console.log('ConcesionarioComponent ngOnInit');    
    this.recetas_disponibles = this.cochesService.getAll();   

  }

  recibirCoche(event){
    console.log('ConcesionarioComponent: recibirCoche %o %i', event.coche , event.otroParametro);               
    this.coche2 = this.coche1;
    this.coche1 = event.coche;   
  }

  

}
