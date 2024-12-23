import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPackagesComponent } from './edit-packages.component';

describe('EditPackagesComponent', () => {
  let component: EditPackagesComponent;
  let fixture: ComponentFixture<EditPackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPackagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditPackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
