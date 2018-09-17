import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PastelRoutingModule } from './pastel-routing.module';
import { RutaUnoComponent } from './ruta-uno/ruta-uno.component';
import { RutaDosComponent } from './ruta-dos/ruta-dos.component';
import { RutaTresComponent } from './ruta-tres/ruta-tres.component';

@NgModule({
  imports: [
    CommonModule,
    PastelRoutingModule
  ],
  declarations: [RutaUnoComponent, RutaDosComponent, RutaTresComponent]
})
export class PastelModule { }
