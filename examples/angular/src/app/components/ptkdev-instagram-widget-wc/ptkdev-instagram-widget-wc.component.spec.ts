import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtkdevInstagramWidgetWcComponent } from './ptkdev-instagram-widget-wc.component';

describe('PtkdevInstagramWidgetWcComponent', () => {
  let component: PtkdevInstagramWidgetWcComponent;
  let fixture: ComponentFixture<PtkdevInstagramWidgetWcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtkdevInstagramWidgetWcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtkdevInstagramWidgetWcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
