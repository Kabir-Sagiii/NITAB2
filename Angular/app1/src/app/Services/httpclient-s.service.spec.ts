import { TestBed } from '@angular/core/testing';

import { HttpclientSService } from './httpclient-s.service';

describe('HttpclientSService', () => {
  let service: HttpclientSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpclientSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
