import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibCostosXPComponent } from './lib-costos-xp.component';

describe('LibCostosXPComponent', () => {
  let component: LibCostosXPComponent;
  let fixture: ComponentFixture<LibCostosXPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibCostosXPComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibCostosXPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
