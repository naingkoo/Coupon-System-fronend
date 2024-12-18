import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusPaymentComponent } from './cus-payment.component';

describe('CusPaymentComponent', () => {
  let component: CusPaymentComponent;
  let fixture: ComponentFixture<CusPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CusPaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
