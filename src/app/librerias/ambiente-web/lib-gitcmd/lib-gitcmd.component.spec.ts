import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibGitcmdComponent } from './lib-gitcmd.component';

describe('LibGitcmdComponent', () => {
  let component: LibGitcmdComponent;
  let fixture: ComponentFixture<LibGitcmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibGitcmdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibGitcmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
