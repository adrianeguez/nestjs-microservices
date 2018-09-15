import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ruta-inicio',
  templateUrl: './ruta-inicio.component.html',
  styleUrls: ['./ruta-inicio.component.css']
})
export class RutaInicioComponent implements OnInit {

  constructor(private readonly _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute
      .data
      .subscribe((params) => {
        console.log(params);
        // console.log(params.get('inicioDatos'));
      });
  }

}
