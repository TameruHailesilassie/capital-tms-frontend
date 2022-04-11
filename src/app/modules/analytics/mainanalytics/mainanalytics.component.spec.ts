import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAnalyticsComponent } from './mainanalytics.component';

describe('OfficeanalyticsComponent', () => {
  let component: MainAnalyticsComponent;
  let fixture: ComponentFixture<MainAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAnalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
