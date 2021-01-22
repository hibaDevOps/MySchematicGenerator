import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectMechComponent } from './edit-project-mech.component';

describe('EditProjectMechComponent', () => {
  let component: EditProjectMechComponent;
  let fixture: ComponentFixture<EditProjectMechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProjectMechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProjectMechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
