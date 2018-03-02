import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

//Componentes
import{ RecetaComponent} from './receta/receta.component';
import{ PropiedadesComponent} from './propiedades/propiedades.component';
import{ Page404Component} from './page404/page404.component';
import{ HomeComponent} from './home/home.component';
import{ UsuarioComponent} from './usuario/usuario.component';
import { ConcesionarioComponent } from './concesionario/concesionario.component';

//Rutas de nuestra App
const appRoutes: Routes = [
    { path: '',                        component: HomeComponent },
    { path: 'home',                    component: HomeComponent },
    { path: 'receta',                  component: RecetaComponent },
    { path: 'propiedades',             component: PropiedadesComponent },
    { path: 'usuario',                 component: UsuarioComponent },
    { path: 'concesionario',           component: ConcesionarioComponent },
    { path: '**',                      component: Page404Component }
    
    
  ];

  
  export const AppRouter = RouterModule.forRoot(appRoutes);