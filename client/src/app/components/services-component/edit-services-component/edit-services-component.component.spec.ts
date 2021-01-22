import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServicesComponentComponent } from './edit-services-component.component';

describe('EditServicesComponentComponent', () => {
  let component: EditServicesComponentComponent;
  let fixture: ComponentFixture<EditServicesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditServicesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServicesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
