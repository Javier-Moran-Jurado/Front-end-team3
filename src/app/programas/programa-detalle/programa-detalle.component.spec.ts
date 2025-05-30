import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramaDetalleComponent } from './programa-detalle.component';

describe('ProgramaDetalleComponent', () => {
  let component: ProgramaDetalleComponent;
  let fixture: ComponentFixture<ProgramaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgramaDetalleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
