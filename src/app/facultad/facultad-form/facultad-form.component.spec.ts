import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultadFormComponent } from './facultad-form.component';

describe('FacultadFormComponent', () => {
  let component: FacultadFormComponent;
  let fixture: ComponentFixture<FacultadFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacultadFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
