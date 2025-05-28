import { TestBed } from '@angular/core/testing';

import { OvaService } from './ova.service';

describe('OvaService', () => {
  let service: OvaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OvaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
