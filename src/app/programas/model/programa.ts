export class Programa {
  id: number;  // Quitamos el ? para hacerlo obligatorio
  nombre: string;  // Añadimos la propiedad faltante
  activo?: boolean;
  duracion?: number;
  idCoordinador?: number;
  idFacultad?: number;

  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }
}
