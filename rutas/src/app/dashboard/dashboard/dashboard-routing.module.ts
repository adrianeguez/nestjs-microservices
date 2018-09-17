import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaDashboardComponent } from './ruta-dashboard/ruta-dashboard.component';
import { RutaDetalleComponent } from './ruta-detalle/ruta-detalle.component';
import { RutaMasterComponent } from './ruta-master/ruta-master.component';

const routes: Routes = [
  {
    path: 'iniciodash',
    component: RutaDashboardComponent,
    outlet: 'dashboard'
  },
  {
    path: 'detalle',
    component: RutaDetalleComponent,
    outlet: 'dashboard'
  },
  {
    path: 'master',
    component: RutaMasterComponent,
    outlet: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
