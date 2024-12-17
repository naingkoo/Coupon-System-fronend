import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmUserListComponent } from './adm-user-list.component';

describe('AdmUserListComponent', () => {
  let component: AdmUserListComponent;
  let fixture: ComponentFixture<AdmUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmUserListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
