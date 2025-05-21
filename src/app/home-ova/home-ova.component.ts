import { Component } from '@angular/core';

@Component({
  selector: 'app-home-ova',
  templateUrl: './home-ova.component.html',
  styleUrls: ['./home-ova.component.css']
})
export class HomeOvaComponent {
  selectedOva: string | null = null;

  facultades = [
    {
      nombre: 'Facultad 1',
      programas: [
        {
          nombre: 'Programa 1',
          cursos: [
            {
              nombre: 'Curso 1',
              ovas: ['OVA 1', 'OVA 2', 'OVA 3']
            },
            {
              nombre: 'Curso 2',
              ovas: ['OVA 1', 'OVA 2']
            },
            {
              nombre: 'Curso 3',
              ovas: ['OVA 1']
            }
          ]
        },
        {
          nombre: 'Programa 2',
          cursos: [
            {
              nombre: 'Curso 1',
              ovas: ['OVA 1', 'OVA 2']
            },
            {
              nombre: 'Curso 2',
              ovas: ['OVA 1']
            }
          ]
        }
      ]
    },
    {
      nombre: 'Facultad 2',
      programas: [
        {
          nombre: 'Programa A',
          cursos: [
            {
              nombre: 'Curso A1',
              ovas: ['OVA A1', 'OVA A2']
            },
            {
              nombre: 'Curso A2',
              ovas: ['OVA A1']
            }
          ]
        }
      ]
    },
    {
      nombre: 'Facultad 3',
      programas: []
    }
  ];

  selectOva(ova: string): void {
    this.selectedOva = ova;
  }
}
