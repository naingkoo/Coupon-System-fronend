import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusContactComponent } from './cus-contact.component';

describe('CusContactComponent', () => {
  let component: CusContactComponent;
  let fixture: ComponentFixture<CusContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CusContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
