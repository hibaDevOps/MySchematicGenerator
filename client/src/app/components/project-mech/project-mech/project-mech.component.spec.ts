import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMechComponent } from './project-mech.component';

describe('ProjectMechComponent', () => {
  let component: ProjectMechComponent;
  let fixture: ComponentFixture<ProjectMechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectMechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectMechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
