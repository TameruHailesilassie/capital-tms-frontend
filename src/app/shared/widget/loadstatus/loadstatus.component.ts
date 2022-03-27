import { Component, Input, OnInit } from '@angular/core';
import { LOAD_STATUS } from './status';

@Component({
  selector: 'loadstatus',
  templateUrl: './loadstatus.component.html',
  styleUrls: ['./loadstatus.component.scss']
})
export class LoadstatusComponent implements OnInit {

  statusClass: "badge-soft-info";
  status: string;
  icon:string;
  badge:string;

  @Input() statusId: number;

  constructor() { }

  ngOnInit(): void {
   
    this.fetchStatus();
  }

  fetchStatus(){
    const result = LOAD_STATUS.filter(st => {
      return st.id === Number(this.statusId);
    })[0];
    this.status = result.label;
    this.icon=result.icon;
    this.badge=result.badge;
    
  }

  

}
