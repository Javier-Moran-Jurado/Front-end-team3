import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibOperacionesConjuntosComponent } from './lib-operaciones-conjuntos.component';

describe('LibOperacionesConjuntosComponent', () => {
  let component: LibOperacionesConjuntosComponent;
  let fixture: ComponentFixture<LibOperacionesConjuntosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibOperacionesConjuntosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibOperacionesConjuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
