import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeServicesComponent } from './pipe-services.component';

describe('PipeServicesComponent', () => {
  let component: PipeServicesComponent;
  let fixture: ComponentFixture<PipeServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
