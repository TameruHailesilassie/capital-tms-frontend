import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { Observable } from "rxjs";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { Load } from "./load.model";
import { Loads } from "./data";
import { LoadService } from "./loadService";
import { LoadsSortableDirective, SortEvent } from "./loads-sortable.directive";
import { LoadStatus } from "src/app/shared/widget/loadstatus/status.model";
import { LOAD_STATUS } from "src/app/shared/widget/loadstatus/status";
import { AuthfakeauthenticationService } from "src/app/core/services/authfake.service";
@Component({
  selector: "app-load-board",
  templateUrl: "./load-board.component.html",
  styleUrls: ["./load-board.component.scss"],
  providers: [LoadService, DecimalPipe],
})
export class LoadBoardComponent implements OnInit {
  // breadcrumb items
  breadCrumbItems: Array<{}>;
  loads$: Observable<Load[]>;
  total$: Observable<number>;
  model: NgbDateStruct;
  statusList: LoadStatus[];
  isAdmin: boolean = false;
  officeList:["Los Angeles"];

  tableData: Load[];
  tables$: Observable<Load[]>;

  @ViewChildren(LoadsSortableDirective)
  headers: QueryList<LoadsSortableDirective>;

  constructor(
    public service: LoadService,
    public authService: AuthfakeauthenticationService
  ) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Loads" },
      { label: "Load Board", active: true },
    ];
    this.tableData = Loads;
    this.statusList = LOAD_STATUS;
    this.isAdmin =
      this.authService.currentUserValue.role === "super-admin" ||
      this.authService.currentUserValue.role === "office-admin";



  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = "";
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
