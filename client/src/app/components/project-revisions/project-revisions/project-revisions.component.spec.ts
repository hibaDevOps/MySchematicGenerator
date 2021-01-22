import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRevisionsComponent } from './project-revisions.component';

describe('ProjectRevisionsComponent', () => {
  let component: ProjectRevisionsComponent;
  let fixture: ComponentFixture<ProjectRevisionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectRevisionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRevisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
