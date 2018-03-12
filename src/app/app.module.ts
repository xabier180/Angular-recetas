import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';


//Nuestro Modulo para Routing
import { AppRouter } from './app.route';

//Services
import { CochesService } from './providers/coches.service';
import { RecetaDetalleService } from './providers/receta-detalle.service';
import { TodosService } from './providers/todos.service';



//Pipes
import { RoundPipe } from './pipes/round.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { RecetasFilterPipe } from './pipes/filter.recetas.pipe';

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
import { FormularioComponent } from './recetario/formulario/formulario.component';
import { TodosComponent } from './todos/todos.component';




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
    RecetasFilterPipe,
    RecetarioComponent,
    RecetaDetalleComponent,
    ListadoRecetarioComponent,
    FormularioComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouter,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpClientModule,  
    CochesService,
    RecetaDetalleService,
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }