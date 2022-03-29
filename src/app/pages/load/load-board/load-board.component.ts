import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { OrderSortableService, SortEvent } from './orders-sortable.directive'
import { OrderService } from './orders.service'
import { Orders } from './orders.model'
import { ordersData } from './data'


@Component({
  selector: 'app-load-board',
  templateUrl: './load-board.component.html',
  styleUrls: ['./load-board.component.scss'],
  providers: [OrderService, DecimalPipe]
})
export class LoadBoardComponent implements OnInit {
// breadcrumb items
breadCrumbItems: Array<{}>;

ordersData: Orders[];

orders$: Observable<Orders[]>;
total$: Observable<number>;
model: NgbDateStruct;
@ViewChildren(OrderSortableService) headers: QueryList<OrderSortableService>;

  constructor(public service: OrderService) {
    this.orders$ = service.orders$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Loads' }, { label: 'Load Board', active: true }];

    this.ordersData = ordersData;
  }

  onSort({ column, direction }: SortEvent) {
  
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

}
