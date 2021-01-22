import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSizeComponent } from './services-size.component';

describe('ServicesSizeComponent', () => {
  let component: ServicesSizeComponent;
  let fixture: ComponentFixture<ServicesSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
