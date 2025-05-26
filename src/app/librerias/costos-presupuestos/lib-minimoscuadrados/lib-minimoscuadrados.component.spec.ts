import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibMinimoscuadradosComponent } from './lib-minimoscuadrados.component';

describe('LibMinimoscuadradosComponent', () => {
  let component: LibMinimoscuadradosComponent;
  let fixture: ComponentFixture<LibMinimoscuadradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibMinimoscuadradosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibMinimoscuadradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
