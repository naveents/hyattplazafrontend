import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiningStoreComponent } from './dining-store.component';

describe('DiningStoreComponent', () => {
  let component: DiningStoreComponent;
  let fixture: ComponentFixture<DiningStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiningStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiningStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
