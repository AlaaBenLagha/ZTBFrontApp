import { TestBed } from '@angular/core/testing';

import { T24RetrievalServiceService } from './t24-retrieval-service.service';

describe('T24RetrievalServiceService', () => {
  let service: T24RetrievalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(T24RetrievalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
