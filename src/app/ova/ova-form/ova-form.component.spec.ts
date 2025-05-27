import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvaFormComponent } from './ova-form.component';

describe('OvaFormComponent', () => {
  let component: OvaFormComponent;
  let fixture: ComponentFixture<OvaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OvaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OvaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
