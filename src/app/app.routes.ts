import { Routes } from '@angular/router';
//aca importamos los componentes que vamos a usar en las rutas
import { HomeComponent } from './pages/home/home.component';
import { LabsComponent } from './pages/labs/labs.component';

export const routes: Routes = [
  //en esta parte se definen las rutas de la aplicacion
{
  path: 'home',
  component: HomeComponent
},
{
  path: 'labs',
  component: LabsComponent
},

];
