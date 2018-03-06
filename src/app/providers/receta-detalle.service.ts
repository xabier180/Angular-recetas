import { Injectable } from '@angular/core';
import { RecetaDetalle } from '../model/recetaDetalle';
import { MOCKS_RECETADETALLE } from './mocks.recetaDetalle';
import { element } from 'protractor';

@Injectable()
export class RecetaDetalleService {

  constructor() { 
    console.log('RecetaDetalleService constructor');
  }

  /** 
   * Retorna todos los Coches que tenemos en Stock
  */
 getAll():RecetaDetalle[]{
  console.log('RecetaDetalleService getAll');
  let recetas:RecetaDetalle[] = [];
  let receta;
  
  let jsonData = JSON.parse(MOCKS_RECETADETALLE.recetas_disponibles);

  jsonData.forEach( element => {
    
      receta = new RecetaDetalle( 
                        element.nombre, 
                        element.cocinero
                        );
      receta.foto =     element.foto; 
      receta.likes =    element.likes;
      receta.descripcion = element.descripcion;
      recetas.push(receta);

  });

  return recetas;
}



}
