import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAboutComponent } from './business-about.component';

describe('BusinessAboutComponent', () => {
  let component: BusinessAboutComponent;
  let fixture: ComponentFixture<BusinessAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
