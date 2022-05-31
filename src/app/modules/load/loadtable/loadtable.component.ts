import { DecimalPipe } from "@angular/common";
import {
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from "@angular/core";
import {
  NgbDateParserFormatter,
  NgbDateStruct,
  NgbModal,
} from "@ng-bootstrap/ng-bootstrap";

import { Observable } from "rxjs";
import { AuthfakeauthenticationService } from "src/app/core/services/authfake.service";
import { LOAD_SELECT } from "src/app/shared/widget/loadstatus/status";
import { LoadAttributeModalComponent } from "../load-attribute-modal/load-attribute-modal.component";
import { Load } from "../load.model";
import { LoadService, LOAD_TAB_TYPE } from "src/app/core/services/loadService"
import { ShowPopupEvent } from "src/app/shared/directives/load-show-detail.directive";
import { LoadsSortableDirective, SortEvent } from "src/app/shared/directives/loads-sortable.directive";
import { LoadTableService } from "./LoadTableService";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "load-table",
  templateUrl: "./loadtable.component.html",
  styleUrls: ["./loadtable.component.scss"],
  providers: [DecimalPipe],
})

export class LoadTable implements OnInit {
  officeList: string[] = ["Los Angeles", "Denver", "San Diego"];
  loadFilters = {
    office: null,
    status: null,
    pickupDate: null,
  };
  loads$: Observable<Load[]>;
  pickupDateModel: NgbDateStruct = null;
  statusList: any[];
  isAdmin: boolean = false;
  service: LoadTableService;
  @ViewChildren(LoadsSortableDirective)
  headers: QueryList<LoadsSortableDirective>;
  @Input() loadType: LOAD_TAB_TYPE;
  @Input() statusFilterRequired: boolean;

  constructor(
    private ngbDateParserFormatter: NgbDateParserFormatter,
    private modalService: NgbModal,
    public authService: AuthfakeauthenticationService,
    private pipe: DecimalPipe,
    private route: ActivatedRoute,
    private _loadService: LoadService,
    private router: Router
  ) {

    this.service = new LoadTableService(
      this.pipe,
      this.authService,
      this._loadService
    );
  }

  ngOnInit(): void {

    this.service.initForLoadType = this.loadType;
    this.loads$ = this.service.loads$;
    this.statusList = LOAD_SELECT;
    this.isAdmin =
      this.authService.currentUserValue.role === "super-admin" ||
      this.authService.currentUserValue.role === "office-admin";

  }

  onFilterLoads() {
    this.service.filterTable(
      this.loadFilters.office,
      this.loadFilters.status,
      this.loadFilters.pickupDate
    );
  }

  onPickUpDateSelection(date: NgbDateStruct) {
    if (date !== null) {
      this.pickupDateModel = date;
      this.loadFilters.pickupDate = this.ngbDateParserFormatter.format(date);
      this.onFilterLoads();
    } else {
      this.loadFilters.pickupDate = null;
      this.pickupDateModel = null;
      this.onFilterLoads();
    }
  }

  onOfficeFilter(searchTerm: string) {
    this.onFilterLoads();
  }
  onStatusFilter(searchTerm: any) {
    this.onFilterLoads();
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

  onPickUpDateCanceled() {
    this.loadFilters.pickupDate = null;
    this.pickupDateModel = null;
    this.onFilterLoads();
  }

  scrollModal({ attribute, attributeID }: ShowPopupEvent) {
    this.modalService.open(LoadAttributeModalComponent, {
      scrollable: true,
      size: "xl",
      centered: true,
    });
  }

  onDetail(loadID: number) {
    this.router.navigate([ 'loads/view', 1 ],);

  }


  onFiles(loadID: number) {
        this.router.navigate([ 'loads/view', 1,'files' ], );

  //  this.router.navigate(['loads', 1, 'files'])


  }
}
