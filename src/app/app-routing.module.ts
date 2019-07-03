import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Form01Component } from './myforms/form01/form01.component';

const routes: Routes = [
  /*añadimos las rutas */
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'myform01', component: Form01Component},
  {path: 'myform01',

   loadChildren: () => import ('./myforms/form01/form01.component').then(mod => mod.Form01Component)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
