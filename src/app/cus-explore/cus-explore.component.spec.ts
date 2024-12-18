import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusExploreComponent } from './cus-explore.component';

describe('CusExploreComponent', () => {
  let component: CusExploreComponent;
  let fixture: ComponentFixture<CusExploreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CusExploreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CusExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
