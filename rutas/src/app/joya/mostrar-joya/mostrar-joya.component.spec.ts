import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarJoyaComponent } from './mostrar-joya.component';

describe('MostrarJoyaComponent', () => {
  let component: MostrarJoyaComponent;
  let fixture: ComponentFixture<MostrarJoyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarJoyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarJoyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
