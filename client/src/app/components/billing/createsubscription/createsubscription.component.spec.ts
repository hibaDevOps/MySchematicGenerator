import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesubscriptionComponent } from './createsubscription.component';

describe('CreatesubscriptionComponent', () => {
  let component: CreatesubscriptionComponent;
  let fixture: ComponentFixture<CreatesubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
