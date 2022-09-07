import { TestBed } from '@angular/core/testing';

import { MobilnostService } from './mobilnost.service';

describe('MobilnostService', () => {
  let service: MobilnostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MobilnostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
