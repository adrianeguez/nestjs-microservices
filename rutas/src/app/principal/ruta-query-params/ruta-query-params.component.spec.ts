import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaQueryParamsComponent } from './ruta-query-params.component';

describe('RutaQueryParamsComponent', () => {
  let component: RutaQueryParamsComponent;
  let fixture: ComponentFixture<RutaQueryParamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaQueryParamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaQueryParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
