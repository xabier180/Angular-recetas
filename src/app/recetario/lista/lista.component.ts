import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecetaDetalle } from '../../model/recetaDetalle';

@Component({
  selector: 'app-lista-recetario',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListadoRecetarioComponent implements OnInit {

  @Input('recetarioParametro') recetas_disponibles : Array<RecetaDetalle>;
  //los parametros de salida se realizan a traves de Eventos
  @Output() eventoEmitirReceta = new EventEmitter();

  //receta seleccionada
  receta1:RecetaDetalle;

  //Criterio del buscador
  searchText:string;

  constructor() { }

  ngOnInit() {
  }

  /**
   * Funcion para Emitir el Evento desde el Hijo hacia el Padre
   */
  seleccionarReceta( event, receta : RecetaDetalle ){
    console.log('ListadoRecetarioComponent Emitimos evento al ComponentePadre %o', receta );
    this.eventoEmitirReceta.emit(  //event con 2 parametros
                              {
                                 "receta": receta ,
                                
                              }
                          );

                       
     this.receta1 = receta;        
              
  }
 


}
