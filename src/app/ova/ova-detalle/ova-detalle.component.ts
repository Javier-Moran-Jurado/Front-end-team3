import {Component, OnInit} from '@angular/core';
import {Ova} from '../model/ova';
import {OvaService} from '../service/ova.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ova-detalle',
  templateUrl: './ova-detalle.component.html',
  standalone: false,
  styleUrl: './ova-detalle.component.css'
})
export class OvaDetalleComponent implements OnInit{
  ova!: Ova;

  constructor(private route: ActivatedRoute, private router: Router, private ovaService: OvaService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.ovaService.getOva(id).subscribe(data => this.ova = data);
  }

  deleteOva(ova: Ova): void {
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
        this.ovaService.deleteOva(ova).subscribe(() => {
          Swal.fire('¡Eliminado!', 'El ova ha sido eliminado.', 'success');
          this.router.navigate(['/ovas']);  // Navegar de vuelta al listado de ovas
        });
      }
    });
  }
}
