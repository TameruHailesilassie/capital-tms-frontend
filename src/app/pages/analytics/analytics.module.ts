import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChartistModule } from 'ngx-chartist';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgbNavModule, NgbDropdownModule, NgbModalModule, NgbTooltipModule , NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { LightboxModule } from 'ngx-lightbox';

import { WidgetModule } from '../../shared/widget/widget.module';
import { UIModule } from '../../shared/ui/ui.module';

import { SimplebarAngularModule } from 'simplebar-angular';
import { AnalyticsRoutingModule } from './analytics-routing.module';
import { CompanyanalyticsComponent } from './companyanalytics/companyanalytics.component';
import { OfficeanalyticsComponent } from './officeanalytics/officeanalytics.component';
import { PersonalanalyticsComponent } from './personalanalytics/personalanalytics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


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
    NgbDatepickerModule,
    NgxEchartsModule,
    NgxChartistModule,
    FormsModule,
    WidgetModule,
    ReactiveFormsModule,
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
