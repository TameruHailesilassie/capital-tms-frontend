import { Component, OnInit } from '@angular/core';
import { ChartType } from './wallet.model';
import * as moment from 'moment';
import { OveviewChart } from './data';
import { ConfigService } from 'src/app/core/services/config.service';
@Component({
  selector: 'app-personalanalytics',
  templateUrl: './personalanalytics.component.html',
  styleUrls: ['./personalanalytics.component.scss']
})
export class PersonalanalyticsComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  OveviewChart: ChartType;
  transactions: Array<[]>;
  selectedDateRange: any = { startDate: null, endDate: null };
  reportStartDate: string;
  reportEndDate: string;
  ranges: any = {

    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [
      moment()
        .subtract(1, 'month')
        .startOf('month'),
      moment()
        .subtract(1, 'month')
        .endOf('month')
    ],
    'Last 3 Month': [
      moment()
        .subtract(3, 'month')
        .startOf('month'),
      moment()
        .subtract(1, 'month')
        .endOf('month')
    ],
    'Last 6 Month': [
      moment()
        .subtract(6, 'month')
        .startOf('month'),
      moment()
        .subtract(1, 'month')
        .endOf('month')
    ]

  };
  locale: any = {
    format: 'MMM-DD-YYYY', // could be 'YYYY-MM-DDTHH:mm:ss.SSSSZ'
    displayFormat: 'MMM-DD-YYYY', // default is format value
    direction: 'ltr', // could be rtl
    separator: ' To ', // default is ' - '
    customRangeLabel: 'Custom range',
    firstDay: 1 // first day is monday
  }
  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Dashboards' }, { label: 'My Dashboard', active: true }];
    this.OveviewChart = OveviewChart;
    this.selectedDateRange.startDate = moment().startOf('month');
    this.selectedDateRange.endDate = moment().endOf('month');
    this.reportStartDate = this.selectedDateRange.startDate.format("MMM-DD-YYYY");
    this.reportEndDate = this.selectedDateRange.endDate.format("MMM-DD-YYYY");
    this.breadCrumbItems = [{ label: 'Dashboards' }, { label: 'Company Analytics', active: true }];

    this._fetchData();

  }

  private _fetchData() {
    this.configService.getConfig().subscribe(data => {
      this.transactions = data.transactions;

    });
    this.UpdateReportData();
  }
  private UpdateReportData() {
    console.log(`updating report for date Range= ${this.reportStartDate}  to ${this.reportEndDate}`);
  }

  choosedDate(range) {
    // console.log(range);
    if (range.startDate !== null && range.endDate !== null) {
      this.reportStartDate = range.startDate.format("MMM-DD-YYYY");
      this.reportEndDate = range.endDate.format("MMM-DD-YYYY");
      this.UpdateReportData();
    }
  }
}
