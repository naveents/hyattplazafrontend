import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnowWonderlandComponent } from './snow-wonderland.component';

describe('SnowWonderlandComponent', () => {
  let component: SnowWonderlandComponent;
  let fixture: ComponentFixture<SnowWonderlandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnowWonderlandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowWonderlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
