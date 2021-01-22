import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPipeComponent } from './add-pipe.component';

describe('AddPipeComponent', () => {
  let component: AddPipeComponent;
  let fixture: ComponentFixture<AddPipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
