export interface Ova {
  id: number;
  nombre: string;
  url?: string;
}

export interface Curso {
  id: number;
  nombre: string;
  ovas: Ova[];
}

export interface Programa {
  id: number;
  nombre: string;
  cursos: Curso[];
}

export interface Facultad {
  id: number;
  nombre: string;
  programas: Programa[];
}

export const FACULTADES: Facultad[] = [
  {
    id: 1,
    nombre: 'Facultad Ingenieria',
    programas: [
      {
        id: 1,
        nombre: 'Ing. Sistemas',
        cursos: [
          {
            id: 1,
            nombre: 'Analisis numerico',
            ovas: [
              { id: 1, nombre: 'Interpolación de lagrange', url:'/lib-lagrange' },
            ]
          },
          {
            id: 2,
            nombre: 'Ambiente Web II',
            ovas: [
              { id: 1, nombre: 'Listar Problemas', url:'/problemas' },
              { id: 2, nombre: 'Crear Problemas', url:'/problema-form' },
              { id: 3, nombre: 'Listar Soluciones', url:'/soluciones' },
            ]
          },

          {
            id: 6,
            nombre: 'Sistemas Operativos',
            ovas: [
              { id: 6, nombre: 'Round Robin', url: '/lib-round-robin' }
            ]
          },
          {
            id: 4,
            nombre: 'Costos y presupuestos',
            ovas: [
              { id: 1, nombre: 'MinimosCuadrados', url: '/lib-minimoscuadrados' }
            ]
          },
          {
            id: 3,
            nombre: 'Matemáticas Discretas',
            ovas: [
              { id: 1, nombre: 'Código César', url: '/lib-codigo-cesar' },
            ]
          }
        ]
      },
      {
        id: 2,
        nombre: 'Programa 2',
        cursos: [
          {
            id: 1,
            nombre: 'Curso 1',
            ovas: [
              { id: 1, nombre: 'OVA 1' },
              { id: 2, nombre: 'OVA 2' },
              { id: 3, nombre: 'OVA 3' }
            ]
          },
          {
            id: 2,
            nombre: 'Curso 2',
            ovas: [
              { id: 1, nombre: 'OVA 1' },
              { id: 2, nombre: 'OVA 2' },
              { id: 3, nombre: 'OVA 3' }
            ]
          },
          {
            id: 3,
            nombre: 'Curso 3',
            ovas: [
              { id: 1, nombre: 'OVA 1' },
              { id: 2, nombre: 'OVA 2' },
              { id: 3, nombre: 'OVA 3' }
            ]
          }
        ]
      },
      {
        id: 3,
        nombre: 'Programa 3',
        cursos: [
          {
            id: 1,
            nombre: 'Curso 1',
            ovas: [
              { id: 1, nombre: 'OVA 1' },
              { id: 2, nombre: 'OVA 2' },
              { id: 3, nombre: 'OVA 3' }
            ]
          },
          {
            id: 2,
            nombre: 'Curso 2',
            ovas: [
              { id: 1, nombre: 'OVA 1' },
              { id: 2, nombre: 'OVA 2' },
              { id: 3, nombre: 'OVA 3' }
            ]
          },
          {
            id: 3,
            nombre: 'Curso 3',
            ovas: [
              { id: 1, nombre: 'OVA 1' },
              { id: 2, nombre: 'OVA 2' },
              { id: 3, nombre: 'OVA 3' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 2,
    nombre: 'Facultad 2',
    programas: [
      {
        id: 1,
        nombre: 'Programa 1',
        cursos: [
          {
            id: 1,
            nombre: 'Curso 1',
            ovas: [
              { id: 1, nombre: 'OVA 1' },
              { id: 2, nombre: 'OVA 2' },
              { id: 3, nombre: 'OVA 3' }
            ]
          },
          {
            id: 2,
            nombre: 'Curso 2',
            ovas: [
              { id: 1, nombre: 'OVA 1' },
              { id: 2, nombre: 'OVA 2' },
              { id: 3, nombre: 'OVA 3' }
            ]
          },
          {
            id: 3,
            nombre: 'Curso 3',
            ovas: [
              { id: 1, nombre: 'OVA 1' },
              { id: 2, nombre: 'OVA 2' },
              { id: 3, nombre: 'OVA 3' }
            ]
          }
        ]
      },
      {
        id: 2,
        nombre: 'Programa 2',
        cursos: [
          {
            id: 1,
            nombre: 'Curso 1',
            ovas: [
              { id: 1, nombre: 'OVA 1' },
              { id: 2, nombre: 'OVA 2' },
              { id: 3, nombre: 'OVA 3' }
            ]
          },
          {
            id: 2,
            nombre: 'Curso 2',
            ovas: [
              { id: 1, nombre: 'OVA 1' },
              { id: 2, nombre: 'OVA 2' },
              { id: 3, nombre: 'OVA 3' }
            ]
          },
          {
            id: 3,
            nombre: 'Curso 3',
            ovas: [
              { id: 1, nombre: 'OVA 1' },
              { id: 2, nombre: 'OVA 2' },
              { id: 3, nombre: 'OVA 3' }
            ]
          }
        ]
      },
      {
        id: 3,
        nombre: 'Programa 3',
        cursos: [
          {
            id: 1,
            nombre: 'Curso 1',
            ovas: [
              { id: 1, nombre: 'OVA 1' },
              { id: 2, nombre: 'OVA 2' },
              { id: 3, nombre: 'OVA 3' }
            ]
          },
          {
            id: 2,
            nombre: 'Curso 2',
            ovas: [
              { id: 1, nombre: 'OVA 1' },
              { id: 2, nombre: 'OVA 2' },
              { id: 3, nombre: 'OVA 3' }
            ]
          },
          {
            id: 3,
            nombre: 'Curso 3',
            ovas: [
              { id: 1, nombre: 'OVA 1' },
              { id: 2, nombre: 'OVA 2' },
              { id: 3, nombre: 'OVA 3' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    nombre: 'Facultad 3',
    programas: [
      {
        id: 1,
        nombre: 'Programa 1',
        cursos: [
          {
            id: 1,
            nombre: 'Curso 1',
            ovas: [
              { id: 1, nombre: 'OVA 1' },
              { id: 2, nombre: 'OVA 2' },
              { id: 3, nombre: 'OVA 3' }
            ]
          },
          {
            id: 2,
            nombre: 'Curso 2',
            ovas: [
              { id: 1, nombre: 'OVA 1' },
              { id: 2, nombre: 'OVA 2' },
              { id: 3, nombre: 'OVA 3' }
            ]
          },
          {
            id: 3,
            nombre: 'Curso 3',
            ovas: [
              { id: 1, nombre: 'OVA 1' },
              { id: 2, nombre: 'OVA 2' },
              { id: 3, nombre: 'OVA 3' }
            ]
          }
        ]
      },
      {
        id: 2,
        nombre: 'Programa 2',
        cursos: [
          {
            id: 1,
            nombre: 'Curso 1',
            ovas: [
              { id: 1, nombre: 'OVA 1' },
              { id: 2, nombre: 'OVA 2' },
              { id: 3, nombre: 'OVA 3' }
            ]
          },
          {
            id: 2,
            nombre: 'Curso 2',
            ovas: [
              { id: 1, nombre: 'OVA 1' },
              { id: 2, nombre: 'OVA 2' },
              { id: 3, nombre: 'OVA 3' }
            ]
          },
          {
            id: 3,
            nombre: 'Curso 3',
            ovas: [
              { id: 1, nombre: 'OVA 1' },
              { id: 2, nombre: 'OVA 2' },
              { id: 3, nombre: 'OVA 3' }
            ]
          }
        ]
      },
      {
        id: 3,
        nombre: 'Programa 3',
        cursos: [
          {
            id: 1,
            nombre: 'Curso 1',
            ovas: [
              { id: 1, nombre: 'OVA 1' },
              { id: 2, nombre: 'OVA 2' },
              { id: 3, nombre: 'OVA 3' }
            ]
          },
          {
            id: 2,
            nombre: 'Curso 2',
            ovas: [
              { id: 1, nombre: 'OVA 1' },
              { id: 2, nombre: 'OVA 2' },
              { id: 3, nombre: 'OVA 3' }
            ]
          },
          {
            id: 3,
            nombre: 'Curso 3',
            ovas: [
              { id: 1, nombre: 'OVA 1' },
              { id: 2, nombre: 'OVA 2' },
              { id: 3, nombre: 'OVA 3' }
            ]
          }
        ]
      }
    ]
  }
];
