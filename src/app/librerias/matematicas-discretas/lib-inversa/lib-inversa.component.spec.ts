import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LibInversaComponent } from './lib-inversa.component';

describe('LibInversaComponent', () => {
  let component: LibInversaComponent;
  let fixture: ComponentFixture<LibInversaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [LibInversaComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LibInversaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have empty initial values', () => {
    expect(component.numeroA).toBeNull();
    expect(component.numeroB).toBeNull();
    expect(component.resultado).toEqual('');
  });
});
