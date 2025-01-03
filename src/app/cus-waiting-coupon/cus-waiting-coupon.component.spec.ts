import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusWaitingCouponComponent } from './cus-waiting-coupon.component';

describe('CusWaitingCouponComponent', () => {
  let component: CusWaitingCouponComponent;
  let fixture: ComponentFixture<CusWaitingCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CusWaitingCouponComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusWaitingCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
