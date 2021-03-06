import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

//Componentes
import{ RecetaComponent} from './receta/receta.component';
import{ PropiedadesComponent} from './propiedades/propiedades.component';
import{ Page404Component} from './page404/page404.component';
import{ HomeComponent} from './home/home.component';
import{ UsuarioComponent} from './usuario/usuario.component';
import { ConcesionarioComponent } from './concesionario/concesionario.component';
import { RecetarioComponent } from './recetario/recetario.component';
import { TodosComponent } from './todos/todos.component';
import { FormBasicoComponent } from './form-basico/form-basico.component';


//Rutas de nuestra App
const appRoutes: Routes = [
    { path: '',                        component: HomeComponent },
    { path: 'home',                    component: HomeComponent },
    { path: 'receta',                  component: RecetaComponent },
    { path: 'propiedades',             component: PropiedadesComponent },
    { path: 'usuario',                 component: UsuarioComponent },
    { path: 'concesionario',           component: ConcesionarioComponent },
    { path: 'formulario-basico',       component: FormBasicoComponent },
    { path: 'recetario',               component: RecetarioComponent },
    { path: 'todos',                   component: TodosComponent },
    { path: '**',                      component: Page404Component }
    
    
  ];

  
  export const AppRouter = RouterModule.forRoot(appRoutes);