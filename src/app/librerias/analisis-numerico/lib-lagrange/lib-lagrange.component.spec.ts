import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibLagrangeComponent } from './lib-lagrange.component';

describe('LibLagrangeComponent', () => {
  let component: LibLagrangeComponent;
  let fixture: ComponentFixture<LibLagrangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibLagrangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibLagrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
