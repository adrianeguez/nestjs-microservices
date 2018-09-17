import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaJugueteComponent } from './ruta-juguete/ruta-juguete.component';
import { JugueteComponent } from './juguete/juguete.component';
import { RutaJugueteAbiertoComponent } from './ruta-juguete-abierto/ruta-juguete-abierto.component';

const routes: Routes = [
  {
    path: 'ruta',
    component: RutaJugueteComponent,
    children: [
      {
        path: 'juguete',
        component: JugueteComponent
      },
      {
        path: 'juguete-abierto',
        component: RutaJugueteAbiertoComponent
      },
      {
        path: '',
        redirectTo: 'juguete-abierto',
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: 'ruta',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuguetesRoutingModule { }
