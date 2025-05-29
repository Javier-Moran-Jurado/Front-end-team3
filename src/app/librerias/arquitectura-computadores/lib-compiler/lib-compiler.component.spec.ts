import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibCompilerComponent } from './lib-compiler.component';

describe('LibCompilerComponent', () => {
  let component: LibCompilerComponent;
  let fixture: ComponentFixture<LibCompilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibCompilerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibCompilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
