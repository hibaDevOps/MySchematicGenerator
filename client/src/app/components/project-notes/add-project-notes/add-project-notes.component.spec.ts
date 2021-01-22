import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectNotesComponent } from './add-project-notes.component';

describe('AddProjectNotesComponent', () => {
  let component: AddProjectNotesComponent;
  let fixture: ComponentFixture<AddProjectNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
