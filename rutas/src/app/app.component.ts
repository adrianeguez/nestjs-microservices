import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'rutas';
  constructor(private readonly _router:Router){

  }

  ngOnInit(): void {
    this._router.navigate([
      {
        outlets:{
          dashboard:['master'],
          primary:['inicio'],
          pastel:['ruta-dos'],
        }
      }
    ])
  }
}
