import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServicesValueComponent } from './edit-services-value.component';

describe('EditServicesValueComponent', () => {
  let component: EditServicesValueComponent;
  let fixture: ComponentFixture<EditServicesValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditServicesValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServicesValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
