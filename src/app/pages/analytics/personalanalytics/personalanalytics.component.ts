import { Component, OnInit } from '@angular/core';
import { ChartType } from './wallet.model';

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
  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Dashboards' }, { label: 'My Dashboard', active: true }];
    this.OveviewChart = OveviewChart;
    this._fetchData();
    
  }

  private _fetchData(){
    this.configService.getConfig().subscribe(data => {
      this.transactions = data.transactions;
      
    });
  }

}
