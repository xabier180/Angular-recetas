import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coche } from '../../model/coche';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.scss']
})
export class CocheComponent implements OnInit {


  // Parametro de entrada desde el componente padre al hijo
  @Input('cocheParametro') coche: Coche;


  // Los parametros de salida se realizan a traves de parametros
  @Output() cocheSeleccionado = new EventEmitter();

  constructor() { 
    console.log('CocheComponent constructor');
  }

  ngOnInit() {
    console.log('CocheComponent ngOnInit');
  }

/*
****Funcion para emitir el evento desde el hijo hacia el padre
*/

  seleccionar($event){
    this.cocheSeleccionado.emit({"coche": this.coche});
    console.log('cocheComponent: Emitimos evento al Componete padre %o', this.coche);
  }

}
