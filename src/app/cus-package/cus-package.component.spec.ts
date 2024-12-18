import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusPackageComponent } from './cus-package.component';

describe('CusPackageComponent', () => {
  let component: CusPackageComponent;
  let fixture: ComponentFixture<CusPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CusPackageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
