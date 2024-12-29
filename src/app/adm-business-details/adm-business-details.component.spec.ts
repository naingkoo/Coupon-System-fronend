import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmBusinessDetailsComponent } from './adm-business-details.component';

describe('AdmBusinessDetailsComponent', () => {
  let component: AdmBusinessDetailsComponent;
  let fixture: ComponentFixture<AdmBusinessDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmBusinessDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmBusinessDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
