import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { StatComponent } from './stat/stat.component';
import { TransactionComponent } from './transaction/transaction.component';
import { LoadstatusComponent } from './loadstatus/loadstatus.component';



@NgModule({
  declarations: [StatComponent, TransactionComponent, LoadstatusComponent],
  imports: [
    CommonModule,
    NgbModalModule
  ],
  exports: [StatComponent, TransactionComponent, LoadstatusComponent]
})
export class WidgetModule { }
