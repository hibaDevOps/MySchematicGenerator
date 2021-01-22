import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectObjectsComponent } from './add-project-objects.component';

describe('AddProjectObjectsComponent', () => {
  let component: AddProjectObjectsComponent;
  let fixture: ComponentFixture<AddProjectObjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectObjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
