import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibCrearproblemaComponent } from './lib-crearproblema.component';

describe('LibCrearproblemaComponent', () => {
  let component: LibCrearproblemaComponent;
  let fixture: ComponentFixture<LibCrearproblemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibCrearproblemaComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LibCrearproblemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

