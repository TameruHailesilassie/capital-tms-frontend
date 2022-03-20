import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { CompanyanalyticsComponent } from './companyanalytics/companyanalytics.component';
import { OfficeanalyticsComponent } from './officeanalytics/officeanalytics.component';
import { PersonalanalyticsComponent } from './personalanalytics/personalanalytics.component';


@NgModule({
  declarations: [
    CompanyanalyticsComponent,
    OfficeanalyticsComponent,
    PersonalanalyticsComponent
  ],
  imports: [
    CommonModule,
    AnalyticsRoutingModule
  ]
})
export class AnalyticsModule { }
