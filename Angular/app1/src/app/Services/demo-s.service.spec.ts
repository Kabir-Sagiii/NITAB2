import { TestBed } from '@angular/core/testing';

import { DemoSService } from './demo-s.service';

describe('DemoSService', () => {
  let service: DemoSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
