import { Component, OnInit } from '@angular/core';
import { Curso } from '../model/curso';
import { CursoService } from '../service/curso.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curso-detalle',
  templateUrl: './curso-detalle.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./curso-detalle.component.css']
})
export class CursoDetalleComponent implements OnInit {
  curso!: Curso;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursoService: CursoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cursoService.getCurso(id).subscribe(data => this.curso = data);
  }

  deleteCurso(curso: Curso): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cursoService.deleteCurso(curso).subscribe(() => {
          Swal.fire('¡Eliminado!', 'El curso ha sido eliminado.', 'success');
          this.router.navigate(['/cursos']);
        });
      }
    });
  }
}
