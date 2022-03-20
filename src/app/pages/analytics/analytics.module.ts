import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbNavModule, NgbDropdownModule, NgbModalModule, NgbTooltipModule , NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';

import { LightboxModule } from 'ngx-lightbox';

import { WidgetModule } from '../../shared/widget/widget.module';
import { UIModule } from '../../shared/ui/ui.module';

import { SimplebarAngularModule } from 'simplebar-angular';
import { AnalyticsRoutingModule } from './analytics-routing.module';
import { CompanyanalyticsComponent } from './companyanalytics/companyanalytics.component';
import { OfficeanalyticsComponent } from './officeanalytics/officeanalytics.component';
import { PersonalanalyticsComponent } from './personalanalytics/personalanalytics.component';



@NgModule({
  declarations: [
    CompanyanalyticsComponent,
    OfficeanalyticsComponent,
    PersonalanalyticsComponent,

  ],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    UIModule,
    WidgetModule,
    NgApexchartsModule,
    LightboxModule,
    NgbModalModule,
    SimplebarAngularModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgbNavModule,
    NgbCollapseModule
  ]
})
export class AnalyticsModule { }
