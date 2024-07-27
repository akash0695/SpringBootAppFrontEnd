import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubmitComponent } from './form-submit.component';

describe('FormSubmitComponent', () => {
  let component: FormSubmitComponent;
  let fixture: ComponentFixture<FormSubmitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSubmitComponent]
    });
    fixture = TestBed.createComponent(FormSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
