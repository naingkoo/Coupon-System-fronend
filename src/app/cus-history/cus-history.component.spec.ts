import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusHistoryComponent } from './cus-history.component';

describe('CusHistoryComponent', () => {
  let component: CusHistoryComponent;
  let fixture: ComponentFixture<CusHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CusHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
