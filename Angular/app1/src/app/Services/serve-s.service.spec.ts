import { TestBed } from '@angular/core/testing';

import { ServeSService } from './serve-s.service';

describe('ServeSService', () => {
  let service: ServeSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
