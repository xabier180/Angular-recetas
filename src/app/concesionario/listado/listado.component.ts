import { Component, OnInit, Input, Output } from '@angular/core';
import { Coche } from '../../model/coche';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  @Input('stockParametro') stock : Array<Coche>;

  @Output() eventoEmitir = new EventEmitter();

  constructor() { }

  ngOnInit() {

   

  }

}
