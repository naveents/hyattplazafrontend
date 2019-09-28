import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryMwComponent } from './gallery-mw.component';

describe('GalleryMwComponent', () => {
  let component: GalleryMwComponent;
  let fixture: ComponentFixture<GalleryMwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryMwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryMwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
