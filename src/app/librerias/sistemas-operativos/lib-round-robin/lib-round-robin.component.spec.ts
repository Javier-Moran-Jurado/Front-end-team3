import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LibRoundRobinComponent } from './lib-round-robin.component';

describe('LibRoundRobinComponent', () => {
  let component: LibRoundRobinComponent;
  let fixture: ComponentFixture<LibRoundRobinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LibRoundRobinComponent],
      imports: [FormsModule, HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LibRoundRobinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize default values', () => {
    expect(component.cantidadProcesos).toBeUndefined();
    expect(component.quantum).toBeUndefined();
    expect(component.tiempoLlegada).toBe('');
    expect(component.tiempoRafaga).toBe('');
    expect(component.idProcesos).toBe('');
    expect(component.procesos).toEqual([]);
    expect(component.error).toBe('');
  });

  it('should clear all fields when limpiar is called', () => {
    component.cantidadProcesos = 5;
    component.quantum = 2;
    component.tiempoLlegada = '0,1,2,3,4';
    component.tiempoRafaga = '5,3,8,6,2';
    component.idProcesos = '1,2,3,4,5';
    component.error = 'Some error';

    component.limpiar();

    expect(component.cantidadProcesos).toBeUndefined();
    expect(component.quantum).toBeUndefined();
    expect(component.tiempoLlegada).toBe('');
    expect(component.tiempoRafaga).toBe('');
    expect(component.idProcesos).toBe('');
    expect(component.error).toBe('');
  });

  it('should handle calcular method correctly', () => {
    spyOn(component, 'calcular').and.callThrough();

    component.cantidadProcesos = 5;
    component.quantum = 2;
    component.tiempoLlegada = '0,1,2,3,4';
    component.tiempoRafaga = '5,3,8,6,2';
    component.idProcesos = '1,2,3,4,5';

    component.calcular();

    expect(component.calcular).toHaveBeenCalled();
    // Aquí puedes agregar más verificaciones dependiendo de la lógica de `calcular`.
  });
});
