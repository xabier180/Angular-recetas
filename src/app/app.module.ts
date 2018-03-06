import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//Nuestro Modulo para Routing
import { AppRouter } from './app.route';

//Services
import { CochesService } from './providers/coches.service';
import { RecetaDetalleService } from './providers/receta-detalle.service';


//Pipes
import { RoundPipe } from './pipes/round.pipe';
import { FilterPipe } from './pipes/filter.pipe';

//Componentes
import { AppComponent } from './app.component';
import { RecetaComponent } from './receta/receta.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ConcesionarioComponent } from './concesionario/concesionario.component';
import { CocheComponent } from './concesionario/coche/coche.component';
import { ListadoComponent } from './concesionario/listado/listado.component';
import { RecetarioComponent } from './recetario/recetario.component';
import { RecetaDetalleComponent } from './Recetario/receta-detalle/receta-detalle.component';
import { ListadoRecetarioComponent } from './recetario/lista/lista.component';




@NgModule({
  declarations: [
    AppComponent,
    RecetaComponent,
    PropiedadesComponent,
    Page404Component,
    HomeComponent,
    UsuarioComponent,
    ConcesionarioComponent,
    CocheComponent,
    ListadoComponent,
    RoundPipe,
    FilterPipe,
    RecetarioComponent,
    RecetaDetalleComponent,
    ListadoRecetarioComponent
  ],
  imports: [
    BrowserModule,
    AppRouter,
    FormsModule
  ],
  providers: [
    CochesService,
    RecetaDetalleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }