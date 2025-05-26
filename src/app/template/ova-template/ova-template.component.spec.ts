import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvaTemplateComponent } from './ova-template.component';

describe('OvaTemplateComponent', () => {
  let component: OvaTemplateComponent;
  let fixture: ComponentFixture<OvaTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OvaTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OvaTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
