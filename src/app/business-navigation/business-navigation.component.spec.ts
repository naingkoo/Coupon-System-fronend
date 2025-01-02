import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessNavigationComponent } from './business-navigation.component';

describe('BusinessNavigationComponent', () => {
  let component: BusinessNavigationComponent;
  let fixture: ComponentFixture<BusinessNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
