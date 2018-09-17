import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { MostrarUsuarioComponent } from './mostrar-usuario/mostrar-usuario.component';
import { RutaUsuarioPrincipalComponent } from './ruta-usuario-principal/ruta-usuario-principal.component';
import { FeatureModuleModule } from '../feature-module/feature-module.module';
import { ButtonModule } from 'primeng/button';
import { ARREGLO_RUTAS } from './arreglo-rutas';

@NgModule({
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    FeatureModuleModule,
    ButtonModule
  ],
  declarations: [
    ...ARREGLO_RUTAS
  ]
})
export class UsuarioModule { }




const a:any = [1,2,3]

function adrian(a?,b?,c?){

}

adrian(...a);


const b = {
  a:1,
  b:2,
  c:3
}

const c = {
  d:4,
  e:5,
  f:6
}

console.log('DESTRUCTURACION DE OBJETOS',{...b, ...c});

