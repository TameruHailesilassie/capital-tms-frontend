import { Component, OnInit, ViewChild} from '@angular/core';
import { pieChart } from '../temporaryData';
import { PieChartModel } from 'src/app/shared/models/ChartTypeModel';
import { ConfigService } from '../../../core/services/config.service';
import * as moment from 'moment';
import { AuthfakeauthenticationService } from 'src/app/core/services/authfake.service';


import { StatisticsChart, StatChartType } from './statistics';
@Component({
  selector: 'app-mainanalytics',
  templateUrl: './mainanalytics.component.html',
  styleUrls: ['./mainanalytics.component.scss']
})
export class MainAnalyticsComponent implements OnInit {

  @ViewChild('scrollRef') scrollRef;

  // bread crumb items
  OveviewChart: StatChartType;
  transactions: Array<[]>;
  breadCrumbItems: Array<{}>;

  sassEarning: Array<Object>;
  loadSummaryChart: PieChartModel;
  selectedDateRange: any = { startDate: null, endDate: null }
  reportStartDate: string;
  reportEndDate: string;
  isSuperAdmin: boolean = false;
  isOfficeAdmin: boolean = false;
  ranges: any = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
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
  constructor(private configService: ConfigService, private authService :AuthfakeauthenticationService) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Dashboards' }, { label: 'Office Analytics', active: true }];
    this.selectedDateRange.startDate = moment().startOf('month');
    this.selectedDateRange.endDate = moment().endOf('month');
    this.reportStartDate = this.selectedDateRange.startDate.format("MMM-DD-YYYY");
    this.reportEndDate = this.selectedDateRange.endDate.format("MMM-DD-YYYY");
    this._fetchData();
    this.configService.getConfig().subscribe(response => {
      this.sassEarning = response.sassEarning;
    });
    
    this.isSuperAdmin =
    this.authService.currentUserValue.role === "super-admin" ;

    this.isOfficeAdmin =
    this.authService.currentUserValue.role === "office-admin" ;
  }
  private _fetchData() {
    this.loadSummaryChart = pieChart;
    this.OveviewChart = StatisticsChart;
    this.UpdateReportData();
    this.configService.getConfig().subscribe(data => {
      this.transactions = data.transactions;
  });
}

  ngAfterViewInit() {
   // this.scrollRef.SimpleBar.getScrollElement().scrollTop = 500;
  }

  selectMonth(value) {
    switch (value) {
      case "january":
        this.sassEarning = [
          {
            name: "This month",
            amount: "$2007.35",
            revenue: "0.2",
            time: "From previous period",
            month: "Last month",
            previousamount: "$784.04",
            series: [
              {
                name: "series1",
                data: [22, 35, 20, 41, 51, 42, 49, 45, 58, 42, 75, 48],
              },
            ],
          },
        ];
        break;
      case "december":
        this.sassEarning = [
          {
            name: "This month",
            amount: "$2007.35",
            revenue: "0.2",
            time: "From previous period",
            month: "Last month",
            previousamount: "$784.04",
            series: [
              {
                name: "series1",
                data: [22, 28, 31, 34, 40, 52, 29, 45, 68, 60, 47, 12],
              },
            ],
          },
        ];
        break;
      case "november":
        this.sassEarning = [
          {
            name: "This month",
            amount: "$2887.35",
            revenue: "0.4",
            time: "From previous period",
            month: "Last month",
            previousamount: "$684.04",
            series: [
              {
                name: "series1",
                data: [28, 30, 48, 50, 47, 40, 35, 48, 56, 42, 65, 41],
              },
            ],
          },
        ];
        break;
      case "october":
        this.sassEarning = [
          {
            name: "This month",
            amount: "$2100.35",
            revenue: "0.4",
            time: "From previous period",
            month: "Last month",
            previousamount: "$674.04",
            series: [
              {
                name: "series1",
                data: [28, 48, 39, 47, 48, 41, 28, 46, 25, 32, 24, 28],
              },
            ],
          },
        ];
        break;
    }
  }
  choosedDate(range) {
    // console.log(range);
    if (range.startDate !== null && range.endDate !== null) {
      this.reportStartDate = range.startDate.format("MMM-DD-YYYY");
      this.reportEndDate = range.endDate.format("MMM-DD-YYYY");
      this.UpdateReportData();
    }
  }
  private UpdateReportData() {
    console.log(`updating report for date Range= ${this.reportStartDate}  to ${this.reportEndDate}`);
  }
}
