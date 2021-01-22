import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectRevisionsComponent } from './add-project-revisions.component';

describe('AddProjectRevisionsComponent', () => {
  let component: AddProjectRevisionsComponent;
  let fixture: ComponentFixture<AddProjectRevisionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectRevisionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectRevisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
