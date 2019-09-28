import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopStoreviewComponent } from './shop-storeview.component';

describe('ShopStoreviewComponent', () => {
  let component: ShopStoreviewComponent;
  let fixture: ComponentFixture<ShopStoreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopStoreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopStoreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
