import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServicesComponentComponent } from './add-services-component.component';

describe('AddServicesComponentComponent', () => {
  let component: AddServicesComponentComponent;
  let fixture: ComponentFixture<AddServicesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServicesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServicesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
