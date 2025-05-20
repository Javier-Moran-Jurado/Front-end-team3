import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OvasComponent } from './ovas.component';

describe('OvasComponent', () => {
  let component: OvasComponent;
  let fixture: ComponentFixture<OvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OvasComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(OvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
