import { Injectable } from '@angular/core';
import { RecetaDetalle } from '../model/recetaDetalle';
import { MOCKS_RECETADETALLE } from './mocks.recetaDetalle';
import { element } from 'protractor';

@Injectable()
export class RecetaDetalleService {

  recetas : RecetaDetalle[];

  constructor() { 
    console.log('RecetaDetalleService constructor');
  }

  /** 
   * Retorna todos los Coches que tenemos en Stock
  */
 getAll():RecetaDetalle[]{
  console.log('RecetaDetalleService getAll');
  this.recetas = [];
  let receta;
  
  let jsonData = JSON.parse(MOCKS_RECETADETALLE.recetas_disponibles);

  jsonData.forEach( element => {
    
      receta = new RecetaDetalle( 
                        element.nombre, 
                        element.cocinero,
                        element.foto,
                        element.descripcion
                        );
      receta.foto =     element.foto; 
      receta.likes =    element.likes;
      receta.descripcion = element.descripcion;
      this.recetas.push(receta);

  });

  return this.recetas;
}

/**
 * Crear Nueva Receta
 * @param receta : Receta Nueva
 */

crear( receta : RecetaDetalle):void{
  this.recetas.unshift(receta);
}
  
}
