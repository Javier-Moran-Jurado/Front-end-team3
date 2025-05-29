import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramasFormComponent } from './programas-form.component';

describe('ProgramasFormComponent', () => {
  let component: ProgramasFormComponent;
  let fixture: ComponentFixture<ProgramasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramasFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
