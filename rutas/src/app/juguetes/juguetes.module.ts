import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuguetesRoutingModule } from './juguetes-routing.module';
import { RutaJugueteComponent } from './ruta-juguete/ruta-juguete.component';
import { JugueteComponent } from './juguete/juguete.component';
import { RutaJugueteAbiertoComponent } from './ruta-juguete-abierto/ruta-juguete-abierto.component';

@NgModule({
  imports: [
    CommonModule,
    JuguetesRoutingModule
  ],
  declarations: [RutaJugueteComponent, JugueteComponent, RutaJugueteAbiertoComponent]
})
export class JuguetesModule { }
