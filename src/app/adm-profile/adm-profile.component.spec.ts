import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmProfileComponent } from './adm-profile.component';

describe('AdmProfileComponent', () => {
  let component: AdmProfileComponent;
  let fixture: ComponentFixture<AdmProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
