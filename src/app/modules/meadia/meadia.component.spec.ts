import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeadiaComponent } from './meadia.component';

describe('MeadiaComponent', () => {
  let component: MeadiaComponent;
  let fixture: ComponentFixture<MeadiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeadiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeadiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
