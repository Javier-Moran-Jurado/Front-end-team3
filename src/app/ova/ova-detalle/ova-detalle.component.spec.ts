import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvaDetalleComponent } from './ova-detalle.component';

describe('OvaDetalleComponent', () => {
  let component: OvaDetalleComponent;
  let fixture: ComponentFixture<OvaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OvaDetalleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OvaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
