import { Component, OnInit } from '@angular/core';

interface Curso {
  id: number;
  activo: boolean;
  cuposDisponibles: number;
  descripcion: string;
  duracion: number;
  fechaCreacion: Date;
  horario: string;
  idDocente: number;
  idSemestre: number;
  modalidad: string;
  nombre: string;
  numeroCreditos: number;
}

@Component({
  selector: 'app-listar-curso',
  standalone: false,
  templateUrl: './listar-curso.component.html',
  styleUrls: ['./listar-curso.component.css']
})
export class ListarCursoComponent implements OnInit {
  // Estado de la tabla
  tablaContraida = false;
  Math = Math;
  // Datos de prueba mock
  private cursosMock: Curso[] = [
    {
      id: 1,
      activo: true,
      cuposDisponibles: 25,
      descripcion: 'Curso introductorio a las matemáticas avanzadas',
      duracion: 60,
      fechaCreacion: new Date('2023-01-15'),
      horario: 'Lunes y Miércoles 14:00-16:00',
      idDocente: 101,
      idSemestre: 202301,
      modalidad: 'Presencial',
      nombre: 'Matemáticas Avanzadas',
      numeroCreditos: 4
    },
    {
      id: 2,
      activo: true,
      cuposDisponibles: 30,
      descripcion: 'Fundamentos de programación web moderna',
      duracion: 80,
      fechaCreacion: new Date('2023-02-10'),
      horario: 'Martes y Jueves 10:00-12:00',
      idDocente: 102,
      idSemestre: 202301,
      modalidad: 'Híbrido',
      nombre: 'Programación Web',
      numeroCreditos: 5
    },
    {
      id: 3,
      activo: true,
      cuposDisponibles: 20,
      descripcion: 'Principios de diseño gráfico digital',
      duracion: 50,
      fechaCreacion: new Date('2023-03-05'),
      horario: 'Viernes 16:00-20:00',
      idDocente: 103,
      idSemestre: 202302,
      modalidad: 'Virtual',
      nombre: 'Diseño Gráfico',
      numeroCreditos: 3
    },
    {
      id: 4,
      activo: false,
      cuposDisponibles: 0,
      descripcion: 'Curso de física para ingeniería',
      duracion: 70,
      fechaCreacion: new Date('2022-11-20'),
      horario: 'Lunes 08:00-12:00',
      idDocente: 104,
      idSemestre: 202202,
      modalidad: 'Presencial',
      nombre: 'Física para Ingenieros',
      numeroCreditos: 4
    },
    {
      id: 5,
      activo: true,
      cuposDisponibles: 15,
      descripcion: 'Literatura contemporánea mundial',
      duracion: 40,
      fechaCreacion: new Date('2023-04-12'),
      horario: 'Miércoles 14:00-18:00',
      idDocente: 105,
      idSemestre: 202302,
      modalidad: 'Presencial',
      nombre: 'Literatura Moderna',
      numeroCreditos: 3
    },
    {
      id: 6,
      activo: true,
      cuposDisponibles: 18,
      descripcion: 'Historia del arte desde la antigüedad',
      duracion: 45,
      fechaCreacion: new Date('2023-01-30'),
      horario: 'Jueves 10:00-14:00',
      idDocente: 106,
      idSemestre: 202301,
      modalidad: 'Híbrido',
      nombre: 'Historia del Arte',
      numeroCreditos: 3
    },
    {
      id: 7,
      activo: true,
      cuposDisponibles: 22,
      descripcion: 'Fundamentos de biología molecular',
      duracion: 55,
      fechaCreacion: new Date('2023-03-18'),
      horario: 'Viernes 08:00-12:00',
      idDocente: 107,
      idSemestre: 202302,
      modalidad: 'Presencial',
      nombre: 'Biología Molecular',
      numeroCreditos: 4
    },
    {
      id: 8,
      activo: true,
      cuposDisponibles: 28,
      descripcion: 'Principios de economía internacional',
      duracion: 60,
      fechaCreacion: new Date('2023-02-25'),
      horario: 'Martes 16:00-20:00',
      idDocente: 108,
      idSemestre: 202301,
      modalidad: 'Virtual',
      nombre: 'Economía Internacional',
      numeroCreditos: 5
    },
    {
      id: 9,
      activo: true,
      cuposDisponibles: 10,
      descripcion: 'Curso avanzado de inteligencia artificial',
      duracion: 75,
      fechaCreacion: new Date('2023-05-01'),
      horario: 'Lunes y Miércoles 18:00-20:00',
      idDocente: 109,
      idSemestre: 202302,
      modalidad: 'Híbrido',
      nombre: 'Inteligencia Artificial',
      numeroCreditos: 4
    },
    {
      id: 10,
      activo: true,
      cuposDisponibles: 12,
      descripcion: 'Técnicas avanzadas de marketing digital',
      duracion: 65,
      fechaCreacion: new Date('2023-06-15'),
      horario: 'Martes y Jueves 14:00-16:00',
      idDocente: 110,
      idSemestre: 202301,
      modalidad: 'Virtual',
      nombre: 'Marketing Digital',
      numeroCreditos: 3
    },
    {
      id: 11,
      activo: true,
      cuposDisponibles: 8,
      descripcion: 'Curso de introducción a la ciberseguridad',
      duracion: 50,
      fechaCreacion: new Date('2023-07-20'),
      horario: 'Viernes 10:00-14:00',
      idDocente: 111,
      idSemestre: 202302,
      modalidad: 'Presencial',
      nombre: 'Ciberseguridad',
      numeroCreditos: 4
    },
    {
      id: 12,
      activo: true,
      cuposDisponibles: 20,
      descripcion: 'Curso de fundamentos de la programación',
      duracion: 40,
      fechaCreacion: new Date('2023-08-10'),
      horario: 'Lunes y Miércoles 14:00-16:00',
      idDocente: 112,
      idSemestre: 202301,
      modalidad: 'Híbrido',
      nombre: 'Programación Básica',
      numeroCreditos: 3
    }
  ];

  // Variables para paginación
  paginaActual = 0; 
  itemsPorPagina = 10; 
  totalPaginas = 0;
  totalElementos = 0;
  paginasVisibles: number[] = [];
  cursosPagina: Curso[] = [];

  ngOnInit() {
    this.inicializarPaginacion();
  }

  // Función para contraer/expandir la tabla
  toggleTabla() {
    this.tablaContraida = !this.tablaContraida;
  }

  // Funciones de paginación corregidas
  paginaAnterior() {
    if (this.paginaActual > 0) {
      this.paginaActual--;
      this.actualizarDatosPagina();
      this.actualizarPaginasVisibles();
    }
  }

  paginaSiguiente() {
    if (this.paginaActual < this.totalPaginas - 1) {
      this.paginaActual++;
      this.actualizarDatosPagina();
      this.actualizarPaginasVisibles();
    }
  }

  irAPagina(pagina: number) {
    if (pagina >= 0 && pagina < this.totalPaginas) {
      this.paginaActual = pagina;
      this.actualizarDatosPagina();
      this.actualizarPaginasVisibles();
    }
  }

  // Funciones auxiliares corregidas
  private inicializarPaginacion() {
    this.totalElementos = this.cursosMock.length;
    this.totalPaginas = Math.ceil(this.totalElementos / this.itemsPorPagina);
    this.actualizarDatosPagina();
    this.actualizarPaginasVisibles();
  }

  private actualizarDatosPagina() {
    const inicio = this.paginaActual * this.itemsPorPagina;
    const fin = inicio + this.itemsPorPagina;
    this.cursosPagina = this.cursosMock.slice(inicio, fin);
  }

  private actualizarPaginasVisibles() {
    this.paginasVisibles = [];
    const paginasAMostrar = 5; // Mostrar máximo 5 páginas
    
    let inicio = Math.max(0, this.paginaActual - 2);
    let fin = Math.min(this.totalPaginas - 1, this.paginaActual + 2);

    // Ajustar cuando estamos cerca del inicio
    if (this.paginaActual <= 2) {
      fin = Math.min(paginasAMostrar - 1, this.totalPaginas - 1);
    }
    // Ajustar cuando estamos cerca del final
    else if (this.paginaActual >= this.totalPaginas - 3) {
      inicio = Math.max(0, this.totalPaginas - paginasAMostrar);
    }

    // Generar array de páginas visibles
    for (let i = inicio; i <= fin; i++) {
      this.paginasVisibles.push(i);
    }
  }

  // Funciones para acciones (se mantienen igual)
  verCurso(id: number) {
    console.log('Ver curso con ID:', id);
  }

  editarCurso(id: number) {
    console.log('Editar curso con ID:', id);
  }

  eliminarCurso(id: number) {
    if (confirm('¿Está seguro de eliminar este curso?')) {
      this.cursosMock = this.cursosMock.filter(curso => curso.id !== id);
      this.totalElementos = this.cursosMock.length;
      this.totalPaginas = Math.ceil(this.totalElementos / this.itemsPorPagina);
      
      // Ajustar página actual si es necesario
      if (this.paginaActual >= this.totalPaginas) {
        this.paginaActual = Math.max(0, this.totalPaginas - 1);
      }
      
      this.actualizarDatosPagina();
      this.actualizarPaginasVisibles();
    }
  }
}