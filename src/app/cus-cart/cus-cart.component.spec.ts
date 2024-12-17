import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusCartComponent } from './cus-cart.component';

describe('CusCartComponent', () => {
  let component: CusCartComponent;
  let fixture: ComponentFixture<CusCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CusCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
