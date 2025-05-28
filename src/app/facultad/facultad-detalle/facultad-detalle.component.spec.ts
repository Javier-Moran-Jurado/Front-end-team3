import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadDetalleComponent } from './facultad-detalle.component';

describe('FacultadDetalleComponent', () => {
  let component: FacultadDetalleComponent;
  let fixture: ComponentFixture<FacultadDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacultadDetalleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FacultadDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
