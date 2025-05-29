import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibSoSJComponent } from './lib-so-sjf.component';

describe('LibEscitalaComponent', () => {
  let component: LibSoSJComponent;
  let fixture: ComponentFixture<LibSoSJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibSoSJComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibSoSJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
