import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProgramaComponent } from './home-programa.component';

describe('HomeProgramaComponent', () => {
  let component: HomeProgramaComponent;
  let fixture: ComponentFixture<HomeProgramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeProgramaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
