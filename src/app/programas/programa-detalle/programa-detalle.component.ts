import { Component, Input, OnInit } from '@angular/core';
import { Programa } from '../model/programa';
import { ProgramaService } from '../service/programa.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-programa-detalle',
  templateUrl: './programa-detalle.component.html',
  styleUrls: ['./programa-detalle.component.css']
})
export class ProgramaDetalleComponent implements OnInit {
  @Input() programaId!: number;
  programa!: Programa;

  constructor(
    private programaService: ProgramaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.programaId) {
      this.loadPrograma(this.programaId);
    }
  }

  private loadPrograma(id: number): void {
    this.programaService.getPrograma(id).subscribe({
      next: (data) => this.programa = data,
      error: () => this.router.navigate(['/programas'])
    });
  }

  deletePrograma(programa: Programa): void {
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
        this.programaService.deletePrograma(programa.id).subscribe(() => {
          Swal.fire('¡Eliminado!', 'El programa ha sido eliminado.', 'success');
          this.router.navigate(['/programas']);
        });
      }
    });
  }
}
