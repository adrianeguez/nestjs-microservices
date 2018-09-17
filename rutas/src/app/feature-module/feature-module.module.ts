import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarUsuarioComponent } from '../usuario/mostrar-usuario/mostrar-usuario.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule
  ],
  declarations: [
    MostrarUsuarioComponent
  ],
  exports: [
    MostrarUsuarioComponent
  ]
})
export class FeatureModuleModule { }
