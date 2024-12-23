import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCategorylistComponent } from './adm-categorylist.component';

describe('AdmCategorylistComponent', () => {
  let component: AdmCategorylistComponent;
  let fixture: ComponentFixture<AdmCategorylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmCategorylistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmCategorylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
