import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmdSaleComponent } from './amd-sale.component';

describe('AmdSaleComponent', () => {
  let component: AmdSaleComponent;
  let fixture: ComponentFixture<AmdSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AmdSaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmdSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
