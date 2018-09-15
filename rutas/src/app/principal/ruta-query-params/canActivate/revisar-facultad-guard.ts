import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class RevisarFacultadGuard {

    
    facultadEjemplo = [
        'sistemas',
        'mecanica',
        'electrica'
    ];

    constructor(private readonly _router: Router) {

    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        const usuarioId = route.paramMap.get('facultad')
        const puedeEntrar = this.facultadEjemplo.some((uId) => uId === usuarioId);
        if (puedeEntrar) {
            return puedeEntrar;
        }
        alert('No puede entrar, facultad invalido')
        setTimeout(
            ()=>{
                this._router.navigate(['/inicio'])
            }
        ,1)
        return false;
    }

}
