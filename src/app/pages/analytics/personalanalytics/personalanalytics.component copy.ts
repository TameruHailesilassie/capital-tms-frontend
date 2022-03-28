import { Component, OnInit } from '@angular/core';
import { ChartType } from './wallet.model';

import { OveviewChart } from './data';
@Component({
  selector: 'app-personalanalytics',
  templateUrl: './personalanalytics.component.html',
  styleUrls: ['./personalanalytics.component.scss']
})
export class PersonalanalyticsComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  OveviewChart: ChartType;
  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Dashboards' }, { label: 'My Dashboard', active: true }];
    this.OveviewChart = OveviewChart;

    
  }

}
