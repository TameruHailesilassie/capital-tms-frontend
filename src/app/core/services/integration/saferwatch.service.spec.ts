import { TestBed } from '@angular/core/testing';

import { SaferwatchService } from './saferwatch.service';

describe('SaferwatchService', () => {
  let service: SaferwatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaferwatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
