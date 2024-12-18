import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusBusinessComponent } from './cus-business.component';

describe('CusBusinessComponent', () => {
  let component: CusBusinessComponent;
  let fixture: ComponentFixture<CusBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CusBusinessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
