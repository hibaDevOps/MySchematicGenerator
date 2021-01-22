import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSheetsComponent } from './project-sheets.component';

describe('ProjectSheetsComponent', () => {
  let component: ProjectSheetsComponent;
  let fixture: ComponentFixture<ProjectSheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
