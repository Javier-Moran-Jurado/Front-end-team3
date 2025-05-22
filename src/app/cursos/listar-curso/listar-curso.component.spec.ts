import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCursoComponent } from './listar-curso.component';

describe('ListarCursoComponent', () => {
  let component: ListarCursoComponent;
  let fixture: ComponentFixture<ListarCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListarCursoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
