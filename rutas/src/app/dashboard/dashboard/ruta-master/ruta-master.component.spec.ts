import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaMasterComponent } from './ruta-master.component';

describe('RutaMasterComponent', () => {
  let component: RutaMasterComponent;
  let fixture: ComponentFixture<RutaMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
