import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class RevisarUsuarioIdGuard implements CanActivate {

    usuarioIdValidosEjemplo = [
        1,
        2,
        3,
        4
    ];

    constructor(private readonly _router: Router) {

    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        const usuarioId = route.paramMap.get('usuarioId')
        const puedeEntrar = this.usuarioIdValidosEjemplo.some((uId) => uId === +usuarioId);
        if (puedeEntrar) {
            return puedeEntrar;
        }
        alert('No puede entrar, id usuario invalido');
        setTimeout(
            () => {
                this._router.navigate(['/inicio'])
            }
            , 1)
        return false;
    }
}
