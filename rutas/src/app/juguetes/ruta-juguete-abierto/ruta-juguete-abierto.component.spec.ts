import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaJugueteAbiertoComponent } from './ruta-juguete-abierto.component';

describe('RutaJugueteAbiertoComponent', () => {
  let component: RutaJugueteAbiertoComponent;
  let fixture: ComponentFixture<RutaJugueteAbiertoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaJugueteAbiertoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaJugueteAbiertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
