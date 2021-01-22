import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectSheetsComponent } from './edit-project-sheets.component';

describe('EditProjectSheetsComponent', () => {
  let component: EditProjectSheetsComponent;
  let fixture: ComponentFixture<EditProjectSheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProjectSheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProjectSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
