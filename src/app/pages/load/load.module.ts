import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadRoutingModule } from './load-routing.module';
import { LoadBoardComponent } from './load-board/load-board.component';
import { CreatLoadComponent } from './creat-load/creat-load.component';
import { UIModule } from '../../shared/ui/ui.module';
import { NgbDropdownModule, NgbNavModule, NgbModalModule, NgbPaginationModule, NgbTypeaheadModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderSortableService } from './load-board/orders-sortable.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoadBoardComponent,
    CreatLoadComponent,
    OrderSortableService
  ],
  imports: [
    CommonModule,
    UIModule,
    LoadRoutingModule,
    NgbPaginationModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbModalModule,
    NgbDatepickerModule,
    NgbTypeaheadModule,
    FormsModule,
    ReactiveFormsModule,


  ]
})
export class LoadModule { }
