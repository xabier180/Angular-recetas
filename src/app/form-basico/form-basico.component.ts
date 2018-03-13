import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-basico',
  templateUrl: './form-basico.component.html',
  styleUrls: ['./form-basico.component.scss']
})
export class FormBasicoComponent implements OnInit {

  //Atributo FormGroup para usar en el HTML =>
  formulario : FormGroup;

  fruta : string;

  constructor( private fb:FormBuilder) { 

    this.fruta = "Banana";

    //Crear formulario
    this.formulario = this.fb.group({

      //nombre => Control = input
      nombre : ['', [Validators.required, Validators.minLength(3)]]
    })


  }

  ngOnInit() {
  }

  // html => <form (ngSubmit)="enviar($event)"
    enviar(){
    console.log('Enviar formulario nombre=%s', this.formulario.controls.nombre.value)
  }

  

}
