import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreEventsComponent } from './more-events.component';

describe('MoreEventsComponent', () => {
  let component: MoreEventsComponent;
  let fixture: ComponentFixture<MoreEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
