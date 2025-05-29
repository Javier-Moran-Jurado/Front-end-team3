import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibCostos5Component } from './lib-costos5.component';

describe('LibCostos5Component', () => {
  let component: LibCostos5Component;
  let fixture: ComponentFixture<LibCostos5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibCostos5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibCostos5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
