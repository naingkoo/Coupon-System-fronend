import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusHomeComponent } from './cus-home.component';

describe('CusHomeComponent', () => {
  let component: CusHomeComponent;
  let fixture: ComponentFixture<CusHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CusHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
