import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LibInversaComponent } from './lib-inversa.component';

describe('LibInversaComponent', () => {
  let component: LibInversaComponent;
  let fixture: ComponentFixture<LibInversaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibInversaComponent],
      imports: [HttpClientTestingModule] // Mock para HttpClient
    }).compileComponents();

    fixture = TestBed.createComponent(LibInversaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
