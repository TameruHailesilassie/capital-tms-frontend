import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeanalyticsComponent } from './officeanalytics.component';

describe('OfficeanalyticsComponent', () => {
  let component: OfficeanalyticsComponent;
  let fixture: ComponentFixture<OfficeanalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeanalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeanalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
