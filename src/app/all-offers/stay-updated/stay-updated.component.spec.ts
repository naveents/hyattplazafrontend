import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StayUpdatedComponent2 } from './stay-updated.component';

describe('StayUpdatedComponent', () => {
  let component: StayUpdatedComponent2;
  let fixture: ComponentFixture<StayUpdatedComponent2>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StayUpdatedComponent2 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StayUpdatedComponent2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
