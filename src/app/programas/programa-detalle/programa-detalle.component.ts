import { Component, OnInit } from '@angular/core';
import { Programa } from '../model/programa';
import { ProgramaService } from '../service/programa.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-programa-detalle',
  templateUrl: './programa-detalle.component.html',
  styleUrls: ['./programa-detalle.component.css']
})
export class ProgramaDetalleComponent implements OnInit {
  programa!: Programa;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private programaService: ProgramaService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.programaService.getPrograma(id).subscribe(data =>this.programa = data);{}
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
        this.programaService.deletePrograma(programa).subscribe(() => {
          Swal.fire('¡Eliminado!', 'El programa ha sido eliminado.', 'success');
          this.router.navigate(['/programas']);
        });
      }
    });
  }
}
