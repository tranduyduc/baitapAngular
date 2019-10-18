import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormIn4Component } from './form-in4.component';

describe('FormIn4Component', () => {
  let component: FormIn4Component;
  let fixture: ComponentFixture<FormIn4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormIn4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormIn4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
