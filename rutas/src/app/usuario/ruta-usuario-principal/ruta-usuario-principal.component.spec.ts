import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaUsuarioPrincipalComponent } from './ruta-usuario-principal.component';

describe('RutaUsuarioPrincipalComponent', () => {
  let component: RutaUsuarioPrincipalComponent;
  let fixture: ComponentFixture<RutaUsuarioPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaUsuarioPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaUsuarioPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
