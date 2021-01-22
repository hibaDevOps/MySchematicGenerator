import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectServiceDataComponent } from './project-service-data.component';

describe('ProjectServiceDataComponent', () => {
  let component: ProjectServiceDataComponent;
  let fixture: ComponentFixture<ProjectServiceDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectServiceDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectServiceDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
