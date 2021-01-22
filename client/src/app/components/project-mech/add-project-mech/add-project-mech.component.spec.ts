import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectMechComponent } from './add-project-mech.component';

describe('AddProjectMechComponent', () => {
  let component: AddProjectMechComponent;
  let fixture: ComponentFixture<AddProjectMechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectMechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectMechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
