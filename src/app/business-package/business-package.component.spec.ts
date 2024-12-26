import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPackageComponent } from './business-package.component';

describe('BusinessPackageComponent', () => {
  let component: BusinessPackageComponent;
  let fixture: ComponentFixture<BusinessPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessPackageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
