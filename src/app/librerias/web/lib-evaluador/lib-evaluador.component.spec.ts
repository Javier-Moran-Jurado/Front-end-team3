import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibEvaluadorComponent } from './lib-evaluador.component';

describe('LibEvaluadorComponent', () => {
  let component: LibEvaluadorComponent;
  let fixture: ComponentFixture<LibEvaluadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibEvaluadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibEvaluadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
