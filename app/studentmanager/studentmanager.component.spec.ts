import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentmanagerComponent } from './studentmanager.component';

describe('StudentmanagerComponent', () => {
  let component: StudentmanagerComponent;
  let fixture: ComponentFixture<StudentmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
