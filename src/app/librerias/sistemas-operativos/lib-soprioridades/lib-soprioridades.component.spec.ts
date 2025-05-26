import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibSoprioridadesComponent } from './lib-soprioridades.component';

describe('LibSoprioridadesComponent', () => {
  let component: LibSoprioridadesComponent;
  let fixture: ComponentFixture<LibSoprioridadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibSoprioridadesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibSoprioridadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
