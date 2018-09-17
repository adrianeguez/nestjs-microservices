import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { RutaDashboardComponent } from './ruta-dashboard/ruta-dashboard.component';
import { RutaMasterComponent } from './ruta-master/ruta-master.component';
import { RutaDetalleComponent } from './ruta-detalle/ruta-detalle.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [RutaDashboardComponent, RutaMasterComponent, RutaDetalleComponent]
})
export class DashboardModule { }
