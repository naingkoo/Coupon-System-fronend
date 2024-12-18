import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmPackageComponent } from './adm-package.component';

describe('AdmPackageComponent', () => {
  let component: AdmPackageComponent;
  let fixture: ComponentFixture<AdmPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmPackageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
