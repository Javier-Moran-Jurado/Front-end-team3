import { TestBed } from '@angular/core/testing';

import { ProblemaService } from './problema.service';

describe('ProblemaService', () => {
  let service: ProblemaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProblemaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
