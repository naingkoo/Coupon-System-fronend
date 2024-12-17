import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerDownpageComponent } from './server-downpage.component';

describe('ServerDownpageComponent', () => {
  let component: ServerDownpageComponent;
  let fixture: ComponentFixture<ServerDownpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServerDownpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerDownpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
