import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { RecetaDetalle } from '../model/recetaDetalle';
import { RecetaDetalleService } from '../providers/receta-detalle.service';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.scss']
})
export class RecetarioComponent implements OnInit {

 
  recetas_disponibles : Array<RecetaDetalle>;  //Array casteado a RecetaDetalle
  recetaSeleccionada : RecetaDetalle;

  constructor(public recetaDetalleService:RecetaDetalleService) { 

    console.log('RecetarioComponent constructor');     

    this.recetaSeleccionada = new RecetaDetalle('recetaSeleccionada', 'cocinero', 'foto', 'descripcion');
    this.recetas_disponibles = new Array<RecetaDetalle>();

  }

  ngOnInit() {

    console.log('recetarioComponent ngOnInit');    
    this.recetas_disponibles = this.recetaDetalleService.getAll(); 
    this.recetaSeleccionada = this.recetas_disponibles[0] || new RecetaDetalle('Anonimo', '', '', '');  

  }

  recibirRecetaDetalle(event){
    console.log('RecetarioComponent recibirRecetaDetalle %o', event.receta);               
    
    this.recetaSeleccionada = event.receta;   
  }

  

}
