import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessSaleComponent } from './business-sale.component';

describe('BusinessSaleComponent', () => {
  let component: BusinessSaleComponent;
  let fixture: ComponentFixture<BusinessSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessSaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
