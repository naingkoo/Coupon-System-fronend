import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusEditComponent } from './cus-edit.component';

describe('CusEditComponent', () => {
  let component: CusEditComponent;
  let fixture: ComponentFixture<CusEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CusEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
