import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibEscitalaComponent } from './lib-escitala.component';

describe('LibEscitalaComponent', () => {
  let component: LibEscitalaComponent;
  let fixture: ComponentFixture<LibEscitalaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibEscitalaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibEscitalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
