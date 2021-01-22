import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectRevisionsComponent } from './edit-project-revisions.component';

describe('EditProjectRevisionsComponent', () => {
  let component: EditProjectRevisionsComponent;
  let fixture: ComponentFixture<EditProjectRevisionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProjectRevisionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProjectRevisionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
