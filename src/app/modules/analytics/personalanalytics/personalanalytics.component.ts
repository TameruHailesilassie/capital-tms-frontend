import { Component, OnInit } from "@angular/core";
import { ChartType } from "./wallet.model";
import * as moment from "moment";
import { pieChart } from "../temporaryData";
import { OveviewChart } from "./data";
import { ConfigService } from "../../../core/services/config.service";
import { PieChartModel } from "../../../shared/models/ChartTypeModel";
@Component({
  selector: "app-personalanalytics",
  templateUrl: "./personalanalytics.component.html",
  styleUrls: ["./personalanalytics.component.scss"],
})
export class PersonalanalyticsComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  OveviewChart: ChartType;
  transactions: Array<[]>;
  loadAverage: number;
  selectedDateRange: any = { startDate: null, endDate: null };
  reportStartDate: string;
  reportEndDate: string;
  loadSummaryChart: PieChartModel;
  pickUpCoverage: any[];
  deliveryCoverage: any[];
  ranges: any = {
    "Current Month": [moment().startOf("month"), moment().endOf("month")],
    "Previous Month": [
      moment().subtract(1, "month").startOf("month"),
      moment().subtract(1, "month").endOf("month"),
    ],
    "Current year": [moment().startOf("year"), moment().endOf("year")],
    "Previous Year": [
      moment().subtract(1, "year").startOf("year"),
      moment().subtract(1, "year").endOf("year"),
    ],

    "Last 7 Days": [moment().subtract(6, "days"), moment()],
    "Last 30 Days": [moment().subtract(29, "days"), moment()],
  };

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.loadAverage = 6500;
    this.breadCrumbItems = [
      { label: "Dashboards" },
      { label: "My Dashboard", active: true },
    ];
    this.OveviewChart = OveviewChart;
    this.selectedDateRange.startDate = moment().startOf("month");
    this.selectedDateRange.endDate = moment().endOf("month");
    this.reportStartDate =
      this.selectedDateRange.startDate.format("MMM-DD-YYYY");
    this.reportEndDate = this.selectedDateRange.endDate.format("MMM-DD-YYYY");
    this.breadCrumbItems = [
      { label: "Dashboards" },
      { label: "Company Analytics", active: true },
    ];

    this._fetchData();
  }

  private _fetchData() {
    this.configService.getConfig().subscribe((data) => {
      this.transactions = data.transactions;
    });
    this.loadSummaryChart = pieChart;
    this.UpdateReportData();
    this.pickUpCoverage = [
      {
        name: "Alabama",
        value: 200,
      },
      {
        name: "Alaska",
        value: 600,
      },
      {
        name: "Arizona",
        value: 10,
      },
      {
        name: "Arkansas",
        value: 5,
      },
      {
        name: "California",
        value: 2,
      },
      {
        name: "Colorado",
        value: 2000,
      },
      {
        name: "Connecticut",
        value: 0,
      },
      {
        name: "Delaware",
        value: 1,
      },
      {
        name: "District of Columbia",
        value: 0,
      },
      {
        name: "Florida",
        value: 0,
      },
      {
        name: "Georgia",
        value: 0,
      },
      {
        name: "Hawaii",
        value: 0,
      },
      {
        name: "Idaho",
        value: 0,
      },
      {
        name: "Illinois",
        value: 1500,
      },
      {
        name: "Indiana",
        value: 100,
      },
      {
        name: "Iowa",
        value: 120,
      },
      {
        name: "Kansas",
        value: 16,
      },
      {
        name: "Kentucky",
        value: 5,
      },
      {
        name: "Louisiana",
        value: 2,
      },
      {
        name: "Maine",
        value: 0,
      },
      {
        name: "Maryland",
        value: 0,
      },
      {
        name: "Massachusetts",
        value: 0,
      },
      {
        name: "Michigan",
        value: 0,
      },
      {
        name: "Minnesota",
        value: 0,
      },
      {
        name: "Mississippi",
        value: 58,
      },
      {
        name: "Missouri",
        value: 1,
      },
      {
        name: "Montana",
        value: 0,
      },
      {
        name: "Nebraska",
        value: 63,
      },
      {
        name: "Nevada",
        value: 32,
      },
      {
        name: "New Hampshire",
        value: 50,
      },
      {
        name: "New Jersey",
        value: 1,
      },
      {
        name: "New Mexico",
        value: 1,
      },
      {
        name: "New York",
        value: 1900,
      },
      {
        name: "North Carolina",
        value: 8,
      },
      {
        name: "North Dakota",
        value: 0,
      },
      {
        name: "Ohio",
        value: 1200,
      },
      {
        name: "Oklahoma",
        value: 166,
      },
      {
        name: "Oregon",
        value: 98,
      },
      {
        name: "Pennsylvania",
        value: 2,
      },
      {
        name: "Rhode Island",
        value: 0,
      },
      {
        name: "South Carolina",
        value: 0,
      },
      {
        name: "South Dakota",
        value: 0,
      },
      {
        name: "Tennessee",
        value: 0,
      },
      {
        name: "Texas",
        value: 0,
      },
      {
        name: "Utah",
        value: 0,
      },
      {
        name: "Vermont",
        value: 0,
      },
      {
        name: "Virginia",
        value: 1,
      },
      {
        name: "Washington",
        value: 52,
      },
      {
        name: "West Virginia",
        value: 22,
      },
      {
        name: "Wisconsin",
        value: 2,
      },
      {
        name: "Wyoming",
        value: 66,
      },
      {
        name: "Puerto Rico",
        value: 0,
      },
    ];
  }
  private UpdateReportData() {
    console.log(
      `updating report for date Range= ${this.reportStartDate}  to ${this.reportEndDate}`
    );
  }

  onDateRangeSlelected(event) {
    this.reportStartDate = event.startDate;
    this.reportEndDate = event.endDate;
    this.UpdateReportData();
  }
}
