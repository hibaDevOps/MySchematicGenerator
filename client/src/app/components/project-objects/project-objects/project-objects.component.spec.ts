import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectObjectsComponent } from './project-objects.component';

describe('ProjectObjectsComponent', () => {
  let component: ProjectObjectsComponent;
  let fixture: ComponentFixture<ProjectObjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectObjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
