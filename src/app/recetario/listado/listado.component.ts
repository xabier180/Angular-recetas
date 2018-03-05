import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RecetaDetalle } from '../../model/recetaDetalle';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  @Input('recetarioParametro') recetas_disponibles : Array<RecetaDetalle>;
  //los parametros de salida se realizan a traves de Eventos
  @Output() eventoEmitir = new EventEmitter();

  //Criterio del buscador
  searchText:string;

  constructor() { }

  ngOnInit() {
  }

}
