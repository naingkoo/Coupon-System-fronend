import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusAboutComponent } from './cus-about.component';

describe('CusAboutComponent', () => {
  let component: CusAboutComponent;
  let fixture: ComponentFixture<CusAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CusAboutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
