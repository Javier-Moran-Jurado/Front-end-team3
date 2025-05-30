import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProblemaFormComponent } from './problema-form.component';

describe('ProblemaFormComponent', () => {
  let component: ProblemaFormComponent;
  let fixture: ComponentFixture<ProblemaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProblemaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProblemaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
