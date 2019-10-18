import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietfimlComponent } from './chitietfiml.component';

describe('ChitietfimlComponent', () => {
  let component: ChitietfimlComponent;
  let fixture: ComponentFixture<ChitietfimlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitietfimlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietfimlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
