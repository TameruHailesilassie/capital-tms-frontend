import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyanalyticsComponent } from './companyanalytics.component';

describe('CompanyanalyticsComponent', () => {
  let component: CompanyanalyticsComponent;
  let fixture: ComponentFixture<CompanyanalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyanalyticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyanalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
