import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPipeComponent } from './edit-pipe.component';

describe('EditPipeComponent', () => {
  let component: EditPipeComponent;
  let fixture: ComponentFixture<EditPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
