import { TestBed } from '@angular/core/testing';
import { PaymentDataShareService } from './payment-data-share.service';

describe('PaymentDataShareService', () => {
  let service: PaymentDataShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentDataShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
