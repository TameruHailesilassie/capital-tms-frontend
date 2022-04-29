import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbNavModule, NgbDropdownModule, NgbModalModule, NgbTooltipModule , NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FullCalendarModule } from '@fullcalendar/angular';
import { SimplebarAngularModule } from 'simplebar-angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import bootstrapPlugin from "@fullcalendar/bootstrap";
import { LightboxModule } from 'ngx-lightbox';
import { WidgetModule } from '../shared/widget/widget.module';
import { PagesRoutingModule } from './modules-routing.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { FactoringCompanyModule } from './factoring-company/factoring-company.module';
import { AccountModule } from './account/account.module';
import { LoadModule } from './load/load.module';
import { UiModule } from '../shared/components/ui.module';
import { MapsModule } from './maps/maps.module';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  bootstrapPlugin
]);

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbDropdownModule,
    NgbModalModule,
    FactoringCompanyModule,
    PagesRoutingModule,
    AccountModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    LoadModule,
    AnalyticsModule,
    UiModule,
    WidgetModule,
    MapsModule,
    FullCalendarModule,
    NgbNavModule,
    NgbTooltipModule,
    NgbCollapseModule,
    SimplebarAngularModule,
    LightboxModule
  ],
})
export class PagesModule { }
