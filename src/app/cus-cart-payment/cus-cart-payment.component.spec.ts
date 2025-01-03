import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusCartPaymentComponent } from './cus-cart-payment.component';

describe('CusCartPaymentComponent', () => {
  let component: CusCartPaymentComponent;
  let fixture: ComponentFixture<CusCartPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CusCartPaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusCartPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
