import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { MostrarUsuarioComponent } from './mostrar-usuario/mostrar-usuario.component';
import { RutaUsuarioPrincipalComponent } from './ruta-usuario-principal/ruta-usuario-principal.component';

@NgModule({
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ],
  declarations: [MostrarUsuarioComponent, RutaUsuarioPrincipalComponent]
})
export class UsuarioModule { }
