import { Component, OnInit, ViewChild } from "@angular/core";
import { pieChart } from "../temporaryData";
import { PieChartModel } from "src/app/shared/models/ChartTypeModel";
import { ConfigService } from "../../../core/services/config.service";
import * as moment from "moment";
import { AuthfakeauthenticationService } from "src/app/core/services/authfake.service";
import {
  StatisticsChart,
  StatChartType,
  Stats,
  DashboardStat,
  dashboardStats,
} from "./statistics";

@Component({
  selector: "app-mainanalytics",
  templateUrl: "./mainanalytics.component.html",
  styleUrls: ["./mainanalytics.component.scss"],
})
export class MainAnalyticsComponent implements OnInit {
  @ViewChild("scrollRef") scrollRef;
  OveviewChart: StatChartType;
  transactions: Array<[]>;
  breadCrumbItems: Array<{}>;
  sassEarning: Array<Object>;
  loadSummaryChart: PieChartModel;
  reportStartDate: string;
  reportEndDate: string;
  isSuperAdmin: boolean = false;
  isOfficeAdmin: boolean = false;
  pickUpCoverage: any[];
  deliveryCoverage: any[];
  dashBoardWidgets: Stats[];
  loadCount: DashboardStat;
  grossRevenue: DashboardStat;
  netProfit: DashboardStat;
  loadAverage: DashboardStat;
  profitMargin: DashboardStat;
  totalOffice: DashboardStat;
  totalDispatchers: DashboardStat;
  ranges: any = {
    Today: [moment(), moment()],
    Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
    "Last 7 Days": [moment().subtract(6, "days"), moment()],
    "Last 30 Days": [moment().subtract(29, "days"), moment()],
    "This Month": [moment().startOf("month"), moment().endOf("month")],
    "Last Month": [
      moment().subtract(1, "month").startOf("month"),
      moment().subtract(1, "month").endOf("month"),
    ],
    "Last 3 Month": [
      moment().subtract(3, "month").startOf("month"),
      moment().subtract(1, "month").endOf("month"),
    ],
    "Last 6 Month": [
      moment().subtract(6, "month").startOf("month"),
      moment().subtract(1, "month").endOf("month"),
    ],
  };

  constructor(
    private configService: ConfigService,
    private authService: AuthfakeauthenticationService
  ) {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Dashboards" },
      { label: "Office Analytics", active: true },
    ];

    this.reportStartDate = moment().startOf("month").format("MMM-DD-YYYY");
    this.reportEndDate = moment().endOf("month").format("MMM-DD-YYYY");
    this.dashBoardWidgets = dashboardStats;

    this._fetchData();

    this.configService.getConfig().subscribe((response) => {
      this.sassEarning = response.sassEarning;
    });

    this.isSuperAdmin =
      this.authService.currentUserValue.role === "super-admin";

    this.isOfficeAdmin =
      this.authService.currentUserValue.role === "office-admin";
  }
  private _fetchData() {
    this.loadSummaryChart = pieChart;
    this.OveviewChart = StatisticsChart;
    this.UpdateReportData();
    this.configService.getConfig().subscribe((data) => {
      this.transactions = data.transactions;
    });

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
    this.loadCount = this.getFilteredStat("laodCount");
    this.grossRevenue = this.getFilteredStat("grossRevenue");
    this.netProfit = this.getFilteredStat("netProfit");
    this.loadAverage = this.getFilteredStat("loadAvergae");
    this.profitMargin = this.getFilteredStat("profitMargin");
    this.loadCount = this.getFilteredStat("laodCount");
    this.totalOffice = this.getFilteredStat("totalOffice");
    this.totalDispatchers = this.getFilteredStat("totalDispatchers");
  }

  ngAfterViewInit() {
    this.scrollRef.SimpleBar.getScrollElement().scrollTop = 500;
  }
  getFilteredStat(name: string) {
    return this.dashBoardWidgets.filter((x) => x.name === name)[0].content;
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

  onDateRangeSlelected(event) {
    this.reportStartDate = event.startDate;
    this.reportEndDate = event.endDate;
    this.UpdateReportData();
  }
  private UpdateReportData() {
    console.log(
      `updating report for date Range= ${this.reportStartDate}  to ${this.reportEndDate}`
    );
  }
}
