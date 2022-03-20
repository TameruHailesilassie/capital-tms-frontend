import { TestBed } from '@angular/core/testing';

import { RolebasedlandingService } from './rolebasedlanding.service';

describe('RolebasedlandingService', () => {
  let service: RolebasedlandingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RolebasedlandingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
