import { TestBed } from '@angular/core/testing';

import { ClientOperationsService } from './client-operations.service';

describe('ClientOperationsService', () => {
  let service: ClientOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
