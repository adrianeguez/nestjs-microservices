import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { mergeMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-ruta-query-params',
  templateUrl: './ruta-query-params.component.html',
  styleUrls: ['./ruta-query-params.component.css']
})
export class RutaQueryParamsComponent implements OnInit {

  constructor(private readonly _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const parametrosDeRuta$ = this._activatedRoute.paramMap;
    const parametrosDeConsulta$ = this._activatedRoute.queryParamMap;


    parametrosDeConsulta$
      .pipe(
        mergeMap(
          (parametroConsulta: any) => {
            return parametrosDeRuta$
              .pipe(
                map(
                  fusionarParametrosConsulta(parametroConsulta)
                )
              )
          }
        )
      )
      .subscribe(
        (params) => {
          console.log(params);
        }
      )
  }

}

function fusionarParametrosConsulta(parametroConsulta: any) {
  return (parametrosRuta: any) => {
    return { ...parametroConsulta.params, ...parametrosRuta.params }
  }
}