import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmBusinessComponent } from './adm-business.component';

describe('AdmBusinessComponent', () => {
  let component: AdmBusinessComponent;
  let fixture: ComponentFixture<AdmBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmBusinessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
