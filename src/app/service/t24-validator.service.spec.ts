import { TestBed } from '@angular/core/testing';

import { T24ValidatorService } from './t24-validator.service';

describe('T24ValidatorService', () => {
  let service: T24ValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(T24ValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
