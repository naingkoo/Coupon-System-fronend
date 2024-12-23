import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmServicelistComponent } from './adm-servicelist.component';

describe('AdmServicelistComponent', () => {
  let component: AdmServicelistComponent;
  let fixture: ComponentFixture<AdmServicelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmServicelistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmServicelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
