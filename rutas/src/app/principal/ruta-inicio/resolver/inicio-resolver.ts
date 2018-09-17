import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class InicioResolver implements Resolve<string> {

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<string> | Promise<string> | string {
        console.log('Inicio Resolver');
        return 'bienvenido';
    }

}
