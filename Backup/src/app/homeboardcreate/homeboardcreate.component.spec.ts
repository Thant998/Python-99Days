import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeboardcreateComponent } from './homeboardcreate.component';

describe('HomeboardcreateComponent', () => {
  let component: HomeboardcreateComponent;
  let fixture: ComponentFixture<HomeboardcreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeboardcreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeboardcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
