import {Component, OnInit} from '@angular/core';
import {Facultad} from '../model/facultad';
import {FacultadService} from '../service/facultad.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-facultad-detalle',
  templateUrl: './facultad-detalle.component.html',
  standalone: false,
  styleUrl: './facultad-detalle.component.css'
})
export class FacultadDetalleComponent implements OnInit{
  facultad!: Facultad;

  constructor(private route: ActivatedRoute, private router: Router, private facultadService: FacultadService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.facultadService.getFacultad(id).subscribe(data => this.facultad = data);
  }

  deleteFacultad(facultad: Facultad): void {
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
        this.facultadService.deleteFacultad(facultad).subscribe(() => {
          Swal.fire('¡Eliminado!', 'El facultad ha sido eliminado.', 'success');
          this.router.navigate(['/facultades']);  // Navegar de vuelta al listado de facultads
        });
      }
    });
  }
}
