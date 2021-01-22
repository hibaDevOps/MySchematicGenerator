import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectSheetsComponent } from './add-project-sheets.component';

describe('AddProjectSheetsComponent', () => {
  let component: AddProjectSheetsComponent;
  let fixture: ComponentFixture<AddProjectSheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectSheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
