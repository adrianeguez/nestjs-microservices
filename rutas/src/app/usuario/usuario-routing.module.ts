import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutaUsuarioPrincipalComponent } from './ruta-usuario-principal/ruta-usuario-principal.component';

const routes: Routes = [
  {
    path: 'home',
    component: RutaUsuarioPrincipalComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
