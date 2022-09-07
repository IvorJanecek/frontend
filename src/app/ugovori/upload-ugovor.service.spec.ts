import { TestBed } from '@angular/core/testing';

import { UploadUgovorService } from './upload-ugovor.service';

describe('UploadUgovorService', () => {
  let service: UploadUgovorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadUgovorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
