import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeadiaDetailComponent } from './meadia-detail.component';

describe('MeadiaDetailComponent', () => {
  let component: MeadiaDetailComponent;
  let fixture: ComponentFixture<MeadiaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeadiaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeadiaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
