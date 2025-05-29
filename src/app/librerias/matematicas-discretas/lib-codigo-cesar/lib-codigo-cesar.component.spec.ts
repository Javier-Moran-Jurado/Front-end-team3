import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LibCodigoCesarComponent } from './lib-codigo-cesar.component';

describe('LibCodigoCesarComponent', () => {
  let component: LibCodigoCesarComponent;
  let fixture: ComponentFixture<LibCodigoCesarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibCodigoCesarComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LibCodigoCesarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
