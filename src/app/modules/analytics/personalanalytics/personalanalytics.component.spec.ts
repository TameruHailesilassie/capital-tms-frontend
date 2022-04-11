import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalanalyticsComponent } from './personalanalytics.component';

describe('PersonalanalyticsComponent', () => {
  let component: PersonalanalyticsComponent;
  let fixture: ComponentFixture<PersonalanalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalanalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalanalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
