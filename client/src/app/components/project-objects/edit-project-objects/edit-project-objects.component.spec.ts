import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectObjectsComponent } from './edit-project-objects.component';

describe('EditProjectObjectsComponent', () => {
  let component: EditProjectObjectsComponent;
  let fixture: ComponentFixture<EditProjectObjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProjectObjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProjectObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
