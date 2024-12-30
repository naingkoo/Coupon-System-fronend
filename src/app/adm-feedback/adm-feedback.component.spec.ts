import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmFeedbackComponent } from './adm-feedback.component';

describe('AdmFeedbackComponent', () => {
  let component: AdmFeedbackComponent;
  let fixture: ComponentFixture<AdmFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmFeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
