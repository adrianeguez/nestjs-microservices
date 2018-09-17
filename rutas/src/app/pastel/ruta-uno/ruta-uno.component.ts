import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-uno',
  templateUrl: './ruta-uno.component.html',
  styleUrls: ['./ruta-uno.component.css']
})
export class RutaUnoComponent implements OnInit {

  constructor(private readonly _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const parametrosRequeridosYOpcionales$ = this._activatedRoute.paramMap;
    parametrosRequeridosYOpcionales$
      .subscribe(
        (parametros) => {
          console.log('PASTEL', parametros);
        }
      )
  }

}
