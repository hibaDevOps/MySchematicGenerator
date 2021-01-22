import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectRegisterSheetComponent } from './project-register-sheet.component';

describe('ProjectRegisterSheetComponent', () => {
  let component: ProjectRegisterSheetComponent;
  let fixture: ComponentFixture<ProjectRegisterSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectRegisterSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectRegisterSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
