import { TestBed } from '@angular/core/testing';

import { couponService } from './couponService';

describe('couponService', () => {
  let service: couponService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(couponService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

