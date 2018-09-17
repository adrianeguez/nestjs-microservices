import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaJugueteComponent } from './ruta-juguete.component';

describe('RutaJugueteComponent', () => {
  let component: RutaJugueteComponent;
  let fixture: ComponentFixture<RutaJugueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaJugueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaJugueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
