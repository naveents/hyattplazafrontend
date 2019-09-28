import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreviewHypermarketComponent } from './storeview-hypermarket.component';

describe('StoreviewHypermarketComponent', () => {
  let component: StoreviewHypermarketComponent;
  let fixture: ComponentFixture<StoreviewHypermarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreviewHypermarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreviewHypermarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
