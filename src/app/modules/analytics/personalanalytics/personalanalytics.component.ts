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
