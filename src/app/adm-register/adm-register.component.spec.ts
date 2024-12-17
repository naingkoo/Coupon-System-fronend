import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmRegisterComponent } from './adm-register.component';

describe('AdmRegisterComponent', () => {
  let component: AdmRegisterComponent;
  let fixture: ComponentFixture<AdmRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
