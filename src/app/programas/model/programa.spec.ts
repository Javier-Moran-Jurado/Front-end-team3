import { Programa } from './programa';

describe('Programa', () => {
  it('should create an instance with required fields', () => {
    // Proporciona los valores obligatorios (id y nombre)
    const programa = new Programa(1, 'Programa de Ejemplo');
    expect(programa).toBeTruthy();
    expect(programa.id).toBe(1);
    expect(programa.nombre).toBe('Programa de Ejemplo');
  });

  it('should handle optional fields', () => {
    // Puedes añadir campos opcionales después de la creación
    const programa = new Programa(2, 'Otro Programa');
    programa.activo = true;
    programa.duracion = 6;

    expect(programa.activo).toBeTrue();
    expect(programa.duracion).toBe(6);
  });
});
