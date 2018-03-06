import { Component, OnInit, Input } from '@angular/core';
import { RecetaDetalle } from '../../model/recetaDetalle';

@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta-detalle.component.html',
  styleUrls: ['./receta-detalle.component.scss']
})
export class RecetaDetalleComponent implements OnInit {

  //Parametro de Entrada desde el Componete Padre al Hijo
  @Input('receta1') receta1 : RecetaDetalle; // receta para mostrar

  constructor() {
    console.log('RecetaDetalleComponent constructor');
   }

  ngOnInit() {
    console.log('RecetaDetalleComponent ngOnInit');
  }

}
