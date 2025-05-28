import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibSolucionComponent } from './lib-solucion.component';

describe('LibSolucionComponent', () => {
  let component: LibSolucionComponent;
  let fixture: ComponentFixture<LibSolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibSolucionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibSolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
