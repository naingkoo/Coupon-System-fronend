import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCategorylistServicelistComponent } from './adm-categorylist-servicelist.component';

describe('AdmCategorylistServicelistComponent', () => {
  let component: AdmCategorylistServicelistComponent;
  let fixture: ComponentFixture<AdmCategorylistServicelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmCategorylistServicelistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmCategorylistServicelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
