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
              { id: 1, nombre: 'Interpolacion de lagrange', url:'/lib-lagrange' },
              { id: 2, nombre: 'Interpolacion de newton', url:'/lib-newton' },
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
