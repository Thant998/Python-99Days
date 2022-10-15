import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginwithpictureComponent } from './loginwithpicture.component';

describe('LoginwithpictureComponent', () => {
  let component: LoginwithpictureComponent;
  let fixture: ComponentFixture<LoginwithpictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginwithpictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginwithpictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
