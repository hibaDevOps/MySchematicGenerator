import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServicesSizeComponent } from './add-services-size.component';

describe('AddServicesSizeComponent', () => {
  let component: AddServicesSizeComponent;
  let fixture: ComponentFixture<AddServicesSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServicesSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServicesSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
