import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpWorkspaceComponent } from './pop-up-workspace.component';

describe('PopUpWorkspaceComponent', () => {
  let component: PopUpWorkspaceComponent;
  let fixture: ComponentFixture<PopUpWorkspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpWorkspaceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
