import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibProblemaComponent } from './problema-form.component';

describe('LibProblemaComponent', () => {
  let component: LibProblemaComponent;
  let fixture: ComponentFixture<LibProblemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibProblemaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibProblemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
