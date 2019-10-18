import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHCNComponent } from './form-hcn.component';

describe('FormHCNComponent', () => {
  let component: FormHCNComponent;
  let fixture: ComponentFixture<FormHCNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHCNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHCNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
