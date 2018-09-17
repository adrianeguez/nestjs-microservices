import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaUnoComponent } from './ruta-uno/ruta-uno.component';
import { RutaDosComponent } from './ruta-dos/ruta-dos.component';
import { RutaTresComponent } from './ruta-tres/ruta-tres.component';

const routes: Routes = [
  {
    path: 'ruta-uno/:id',
    component: RutaUnoComponent,
    outlet: 'pastel'
  },
  {
    path: 'ruta-dos',
    component: RutaDosComponent,
    outlet: 'pastel'
  },
  {
    path: 'ruta-tres',
    component: RutaTresComponent,
    outlet: 'pastel'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PastelRoutingModule { }
