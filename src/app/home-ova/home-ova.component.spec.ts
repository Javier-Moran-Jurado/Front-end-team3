import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOvaComponent } from './home-ova.component';

describe('HomeOvaComponent', () => {
  let component: HomeOvaComponent;
  let fixture: ComponentFixture<HomeOvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeOvaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeOvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
