import { Component, OnInit } from '@angular/core';
import  { RecetaDetalleService } from '../../providers/receta-detalle.service';
import { RecetaDetalle } from '../../model/recetaDetalle';

//npm install --save-dev jquery
import * as $ from 'jquery';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario : FormGroup;

  constructor(private fb: FormBuilder, public recetasService : RecetaDetalleService) { 
    console.log('FormularioComponent constructor');
    this.crearFormulario();

  }

  ngOnInit() {
    console.log('FormularioComponent ngOnInit');
  }

  crearFormulario():void{
    console.log('FormularioComponent crearFormulario');
    this.formulario = this.fb.group({
      // FormControl(input) => ['value', [Validaciones]]
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      cocinero: ['', [Validators.minLength(5)]],
      foto: ['/assets/imgs/receta_default.jpg', [Validators.required]],
      descripcion: ['', [Validators.minLength(100)]]
    });
  }

  sumitar():void{
    console.log('FormularioComponent onSubmit');

    //TO DO recoger datos del formulario

    let nombre = this.formulario.value.nombre;
    let cocinero = this.formulario.value.cocinero;
    let foto = this.formulario.value.foto;
    let descripcion = this.formulario.value.descripcion;


    let receta = new RecetaDetalle(nombre, cocinero, foto, descripcion);
    this.recetasService.crear( receta );

    //$("#modalReceta").modal('hide');
    $(".close").click();
  }

}
