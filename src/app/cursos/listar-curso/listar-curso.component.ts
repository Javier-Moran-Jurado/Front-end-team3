import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listar-curso',
  standalone: false,
  templateUrl: './listar-curso.component.html',
  styleUrl: './listar-curso.component.css'
})
export class ListarCursoComponent implements OnInit {
  // Estado de la tabla
  tablaContraida = false;

  // Datos de ejemplo
  cursos = [
    { id: 'CRS001', nombre: 'Matemáticas Avanzadas', fechaCreacion: '2023-03-15', horario: 'Lunes y Miércoles 14:00-16:00', idDocente: 'DOC101' },
    { id: 'CRS002', nombre: 'Programación Web', fechaCreacion: '2023-03-22', horario: 'Martes y Jueves 10:00-12:00', idDocente: 'DOC205' },
    { id: 'CRS003', nombre: 'Diseño Gráfico', fechaCreacion: '2023-04-05', horario: 'Viernes 16:00-20:00', idDocente: 'DOC178' },
    { id: 'CRS004', nombre: 'Física Cuántica', fechaCreacion: '2023-04-10', horario: 'Lunes 08:00-12:00', idDocente: 'DOC301' },
    { id: 'CRS005', nombre: 'Literatura Moderna', fechaCreacion: '2023-04-12', horario: 'Miércoles 14:00-18:00', idDocente: 'DOC412' },
    { id: 'CRS006', nombre: 'Historia del Arte', fechaCreacion: '2023-04-15', horario: 'Jueves 10:00-14:00', idDocente: 'DOC225' },
    { id: 'CRS007', nombre: 'Biología Molecular', fechaCreacion: '2023-04-18', horario: 'Viernes 08:00-12:00', idDocente: 'DOC198' },
    { id: 'CRS008', nombre: 'Economía Internacional', fechaCreacion: '2023-04-20', horario: 'Martes 16:00-20:00', idDocente: 'DOC367' },
    { id: 'CRS009', nombre: 'Inglés Avanzado', fechaCreacion: '2023-04-22', horario: 'Lunes y Miércoles 18:00-20:00', idDocente: 'DOC154' },
    { id: 'CRS010', nombre: 'Psicología Cognitiva', fechaCreacion: '2023-04-25', horario: 'Jueves 14:00-18:00', idDocente: 'DOC276' },
    { id: 'CRS011', nombre: 'Estadística Aplicada', fechaCreacion: '2023-04-28', horario: 'Miércoles 08:00-12:00', idDocente: 'DOC432' },
    { id: 'CRS012', nombre: 'Química Orgánica', fechaCreacion: '2023-05-02', horario: 'Viernes 14:00-18:00', idDocente: 'DOC511' }
  ];

  // Variables para paginación
  paginaActual = 1;
  itemsPorPagina = 5;
  totalPaginas = 1;
  paginasVisibles: number[] = [];
  cursosPagina: any[] = [];

  ngOnInit() {
    this.calcularPaginas();
    this.actualizarDatosPagina();
    this.actualizarPaginasVisibles();
  }

  // Función para contraer/expandir la tabla
  toggleTabla() {
    this.tablaContraida = !this.tablaContraida;
  }

  // Funciones de paginación
  paginaAnterior() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      this.actualizarDatosPagina();
      this.actualizarPaginasVisibles();
    }
  }

  paginaSiguiente() {
    if (this.paginaActual < this.totalPaginas) {
      this.paginaActual++;
      this.actualizarDatosPagina();
      this.actualizarPaginasVisibles();
    }
  }

  irAPagina(pagina: number) {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaActual = pagina;
      this.actualizarDatosPagina();
      this.actualizarPaginasVisibles();
    }
  }

  // Funciones auxiliares
  private calcularPaginas() {
    this.totalPaginas = Math.ceil(this.cursos.length / this.itemsPorPagina);
  }

  private actualizarDatosPagina() {
    const inicio = (this.paginaActual - 1) * this.itemsPorPagina;
    const fin = inicio + this.itemsPorPagina;
    this.cursosPagina = this.cursos.slice(inicio, fin);
  }

  private actualizarPaginasVisibles() {
    this.paginasVisibles = [];
    const paginasMostrar = 5; // Número total de páginas a mostrar (2 antes + actual + 2 después)
    let inicio = Math.max(1, this.paginaActual - 2);
    let fin = Math.min(this.totalPaginas, this.paginaActual + 2);

    // Ajustar cuando estamos cerca del inicio o final
    if (this.paginaActual <= 3) {
      fin = Math.min(paginasMostrar, this.totalPaginas);
    } else if (this.paginaActual >= this.totalPaginas - 2) {
      inicio = Math.max(1, this.totalPaginas - paginasMostrar + 1);
    }

    for (let i = inicio; i <= fin; i++) {
      this.paginasVisibles.push(i);
    }
  }
}
