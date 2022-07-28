import { TestBed } from '@angular/core/testing';

import { NatjecajService } from './natjecaj.service';

describe('NatjecajService', () => {
  let service: NatjecajService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NatjecajService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
