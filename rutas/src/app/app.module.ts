import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RutaInicioComponent } from './principal/ruta-inicio/ruta-inicio.component';
import { RutaNoEncontradaComponent } from './principal/ruta-no-encontrada/ruta-no-encontrada.component';
import { InicioResolver } from './principal/ruta-inicio/resolver/inicio-resolver';
import { RutaQueryParamsComponent } from './principal/ruta-query-params/ruta-query-params.component';
import { RevisarUsuarioIdGuard } from './principal/ruta-query-params/canActivate/revisar-usuario-id-guard';
import { GUARDS_RUTA_QUERY } from './principal/ruta-query-params/canActivate/guards-ruta-query';

@NgModule({
  declarations: [
    AppComponent,
    RutaInicioComponent,
    RutaNoEncontradaComponent,
    RutaQueryParamsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'inicio',
        component: RutaInicioComponent,
        resolve: {
          inicioDatos: InicioResolver
        }
      },
      {
        path: 'query/:usuarioId/:nombreId/:facultad',
        component: RutaQueryParamsComponent,
        canActivate: [
          ...GUARDS_RUTA_QUERY
        ]
      },
      {
        path: 'usuario',
        loadChildren: 'src/app/usuario/usuario.module#UsuarioModule'
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      },
      {
        path: '**',
        component: RutaNoEncontradaComponent
      }
    ], {
        useHash: true,
        // enableTracing: true
      }
    )
  ],
  providers: [
    InicioResolver,
    ...GUARDS_RUTA_QUERY
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
