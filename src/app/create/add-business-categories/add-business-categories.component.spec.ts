import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBusinessCategoriesComponent } from './add-business-categories.component';

describe('AddBusinessCategoriesComponent', () => {
  let component: AddBusinessCategoriesComponent;
  let fixture: ComponentFixture<AddBusinessCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddBusinessCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBusinessCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
