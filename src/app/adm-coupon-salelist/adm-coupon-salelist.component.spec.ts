import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCouponSalelistComponent } from './adm-coupon-salelist.component';

describe('AdmCouponSalelistComponent', () => {
  let component: AdmCouponSalelistComponent;
  let fixture: ComponentFixture<AdmCouponSalelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmCouponSalelistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmCouponSalelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
