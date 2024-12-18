import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCouponComponent } from './my-coupon.component';

describe('MyCouponComponent', () => {
  let component: MyCouponComponent;
  let fixture: ComponentFixture<MyCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyCouponComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
