import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadTemplatesComponent } from './upload-templates.component';

describe('UploadTemplatesComponent', () => {
  let component: UploadTemplatesComponent;
  let fixture: ComponentFixture<UploadTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
