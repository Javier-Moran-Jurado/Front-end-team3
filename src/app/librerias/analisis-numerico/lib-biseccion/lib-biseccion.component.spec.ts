import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibBiseccionComponent } from './lib-biseccion.component';

describe('LibBiseccionComponent', () => {
  let component: LibBiseccionComponent;
  let fixture: ComponentFixture<LibBiseccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibBiseccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibBiseccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
