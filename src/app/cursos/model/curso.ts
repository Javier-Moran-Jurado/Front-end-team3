export class Curso {
  id?: number;
  activo?: boolean;
  cuposDisponibles?: number;
  descripcion?: string;
  duracion?: number;
  fechaCreacion?: string; // LocalDate en backend, string ISO en frontend
  horario?: string;
  idDocente?: number;
  idSemestre?: number;
  modalidad?: string;
  nombre?: string;
  numeroCreditos?: number;
}
