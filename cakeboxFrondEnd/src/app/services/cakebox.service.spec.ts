import { TestBed } from '@angular/core/testing';

import { CakeboxService } from './cakebox.service';

describe('CakeboxService', () => {
  let service: CakeboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CakeboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
