import { Component, OnInit, ViewChild } from '@angular/core';
import { earningLineChart, salesAnalyticsDonutChart, emailSentBarChart, monthlyEarningChart } from '../temporaryData';
import { ChartType } from 'src/app/core/models/ChartTypeModel';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from 'src/app/core/services/event.service'; 
import { ConfigService } from 'src/app/core/services/config.service';

import { NgbDate, NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-companyanalytics',
  templateUrl: './companyanalytics.component.html',
  styleUrls: ['./companyanalytics.component.scss']
})
export class CompanyanalyticsComponent implements OnInit {
  model: NgbDateStruct;
  isVisible: string;
  emailSentBarChart: ChartType;
  monthlyEarningChart: ChartType;
  transactions: Array<[]>;
  statData: Array<[]>;
  isActive: string;
  date: { year: number, month: number };
  salesAnalyticsDonutChart: ChartType;
  earningLineChart: ChartType;
  sassEarning: Array<Object>;
  sassTopSelling: Array<Object>;
  @ViewChild('content') content;
  @ViewChild('dp', { static: true }) datePicker: any;
  constructor(private calendar: NgbCalendar,private modalService: NgbModal, private configService: ConfigService, private eventService: EventService) {
  }

  ngOnInit() {

    /**
     * horizontal-vertical layput set
     */
     const attribute = document.body.getAttribute('data-layout');

     this.isVisible = attribute;
     const vertical = document.getElementById('layout-vertical');
     if (vertical != null) {
       vertical.setAttribute('checked', 'true');
     }
     if (attribute == 'horizontal') {
       const horizontal = document.getElementById('layout-horizontal');
       if (horizontal != null) {
         horizontal.setAttribute('checked', 'true');
         console.log(horizontal);
       }
     }
     this.configService.getConfig().subscribe(response => {
      this.sassEarning = response.sassEarning;
      this.sassTopSelling = response.sassTopSelling;
    
    });
    /**
     * Fetches the data
     */
    this.fetchData();
  }

  ngAfterViewInit() {
   /* setTimeout(() => {
      this.openModal();
    }, 2000);*/
  }

  /**
   * Fetches the data
   */
  private fetchData() {
    this.emailSentBarChart = emailSentBarChart;
    this.monthlyEarningChart = monthlyEarningChart;
    this.earningLineChart = earningLineChart;
    this.salesAnalyticsDonutChart = salesAnalyticsDonutChart;
    this.isActive = 'year';
    this.configService.getConfig().subscribe(data => {
      this.transactions = data.transactions;
      this.statData = data.statData;
    });
  }

  openModal() {
    this.modalService.open(this.content, { centered: true });
  }

  weeklyreport() {
    this.isActive = 'week';
    this.emailSentBarChart.series =
      [{
        name: 'Series A',
         data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48]
      }, {
        name: 'Series B',
        data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18]
      }, {
        name: 'Series C',
        data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22]
      }];
  }

  monthlyreport() {
    this.isActive = 'month';
    this.emailSentBarChart.series =
      [{
        name: 'Series A',
         data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48]
      }, {
        name: 'Series B',
        data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22]
      }, {
        name: 'Series C',
        data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18]
      }];
  }

  yearlyreport() {
    this.isActive = 'year';
    this.emailSentBarChart.series =
      [{
        name: 'Series A',
         data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22]
      }, {
        name: 'Series B',
        data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18]
      }, {
        name: 'Series C',
        data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48]
      }];
  }
  selectToday() {
    this.model = this.calendar.getToday();
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
            amount: "$10007.35",
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
  /**
   * Change the layout onclick
   * @param layout Change the layout
   */
   changeLayout(layout: string) {
    this.eventService.broadcast('changeLayout', layout);
  }
}
