import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class RevisarNombreIdGuard {

    nombreIdValidosEjemplo = [
        'adrian',
        'vicente',
        'cristian'
    ];

    constructor(private readonly _router: Router) {

    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        const usuarioId = route.paramMap.get('nombreId')
        const puedeEntrar = this.nombreIdValidosEjemplo.some((uId) => uId === usuarioId);
        if (puedeEntrar) {
            return puedeEntrar;
        }
        alert('No puede entrar, nombre id invalido')
        setTimeout(
            ()=>{
                this._router.navigate(['/inicio'])
            }
        ,1)
        return false;
    }

}
