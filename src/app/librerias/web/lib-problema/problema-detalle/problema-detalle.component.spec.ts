import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemaDetalleComponent } from './problema-detalle.component';

describe('ProblemaDetalleComponent', () => {
  let component: ProblemaDetalleComponent;
  let fixture: ComponentFixture<ProblemaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProblemaDetalleComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProblemaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
