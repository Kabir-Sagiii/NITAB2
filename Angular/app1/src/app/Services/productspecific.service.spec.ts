import { TestBed } from '@angular/core/testing';

import { ProductspecificService } from './productspecific.service';

describe('ProductspecificService', () => {
  let service: ProductspecificService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductspecificService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
