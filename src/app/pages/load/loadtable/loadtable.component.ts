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
import { ShowPopupEvent } from "./load-show-detail.directive";
import { LoadsSortableDirective, SortEvent } from "./loads-sortable.directive";
import { LoadTableService } from "./LoadTableService";
@Component({
  selector: "load-table",
  templateUrl: "./loadtable.component.html",
  styleUrls: ["./loadtable.component.scss"],
})
export class LoadTable implements OnInit {
  officeList: string[] = ["Los Angeles", "Denver", "San Diego"];
  loads$: Observable<Load[]>;
  loadFilters = {
    office: null,
    status: null,
    pickupDate: null,
    onlyMyLoad: false,
  };
  pickupDateModel: NgbDateStruct = null;
  statusList: any[];
  isAdmin: boolean = false;

  @ViewChildren(LoadsSortableDirective)
  headers: QueryList<LoadsSortableDirective>;
  @Input() service: LoadTableService;

  constructor(
    private ngbDateParserFormatter: NgbDateParserFormatter,
    private modalService: NgbModal,
    public authService: AuthfakeauthenticationService
  ) {}

  ngOnInit(): void {
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
      this.loadFilters.pickupDate,
      this.loadFilters.onlyMyLoad
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

  onShowMyLods() {
    this.onFilterLoads();
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
}
