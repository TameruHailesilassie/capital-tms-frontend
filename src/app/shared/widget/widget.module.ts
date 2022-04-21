import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { StatComponent } from "./stat/stat.component";
import { TransactionComponent } from "./transaction/transaction.component";
import { LoadstatusComponent } from "./loadstatus/loadstatus.component";
import { UsaMapComponent } from "./usa-map/usa-map.component";
import { NgxEchartsModule } from "ngx-echarts";
import { DateRangePickerComponent } from "./date-range-picker/date-range-picker.component";
import { NgxDaterangepickerMd } from "ngx-daterangepicker-material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    StatComponent,
    TransactionComponent,
    LoadstatusComponent,
    UsaMapComponent,
    DateRangePickerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDaterangepickerMd.forRoot(),
    NgbModalModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import("echarts"), // or import('./path-to-my-custom-echarts')
    }),
  ],
  exports: [
    StatComponent,
    TransactionComponent,
    LoadstatusComponent,
    UsaMapComponent,
    DateRangePickerComponent,
  ],
})
export class WidgetModule {}
