import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCouponComponent } from './adm-coupon.component';

describe('AdmCouponComponent', () => {
  let component: AdmCouponComponent;
  let fixture: ComponentFixture<AdmCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmCouponComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
