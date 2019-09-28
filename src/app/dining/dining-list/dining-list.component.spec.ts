import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiningListComponent } from './dining-list.component';

describe('DiningListComponent', () => {
  let component: DiningListComponent;
  let fixture: ComponentFixture<DiningListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiningListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiningListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
