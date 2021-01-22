import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectNotesComponent } from './edit-project-notes.component';

describe('EditProjectNotesComponent', () => {
  let component: EditProjectNotesComponent;
  let fixture: ComponentFixture<EditProjectNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProjectNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProjectNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
