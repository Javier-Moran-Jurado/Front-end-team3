import { TestBed } from '@angular/core/testing';

import { SolucionService } from './solucion.service';

describe('SolucionService', () => {
  let service: SolucionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolucionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
