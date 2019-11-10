import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThiOnlineComponent } from './thi-online.component';

describe('ThiOnlineComponent', () => {
  let component: ThiOnlineComponent;
  let fixture: ComponentFixture<ThiOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThiOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThiOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
