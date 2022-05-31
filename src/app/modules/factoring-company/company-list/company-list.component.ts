import { DecimalPipe } from "@angular/common";
import { Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BehaviorSubject, Observable, of, Subject } from "rxjs";
import { tap, debounceTime, switchMap, delay } from "rxjs/operators";
import { CompanyService } from "src/app/core/services/company.service";
import { LoadsSortableDirective, SortDirection, SortEvent } from "src/app/shared/directives/loads-sortable.directive";
import { Company } from "src/app/shared/models/Company.models";
import { State } from "country-state-city"
import { Breadcrumb } from "src/app/core/services/breadcrumb.service";
import { ActivatedRoute, Router } from "@angular/router";

interface companySearchResult {
  companies: Company[];
  total: number;
}

interface State {
  page: number;
  pageSize: number;
  searchTerm: string;
  sortColumn: string;
  sortDirection: SortDirection;
  startIndex: number;
  endIndex: number;
  totalRecords: number;
}

const compare = (v1: string, v2: string) => (v1 < v2 ? -1 : v1 > v2 ? 1 : 0);

function sort(tables: Company[], column: string, direction: string): Company[] {
  if (direction === "" || column === "") {
    return tables;
  } else {
    return [...tables].sort((a, b) => {
      const res = compare(`${a[column]}`, `${b[column]}`);
      return direction === "asc" ? res : -res;
    });
  }
}

function matches(tables: Company, term: string) {
  return (

    tables.name.toLowerCase().includes(term) ||
    tables.addres_1.toLowerCase().includes(term) ||
    tables.city.toLowerCase().includes(term) ||
    tables.state.toLowerCase().includes(term) ||
    tables.zip.toLowerCase().includes(term) ||
    tables.telephone.toLowerCase().includes(term)

  );
}

@Component({
  selector: "app-company-list",
  templateUrl: "./company-list.component.html",
  styleUrls: ["./company-list.component.scss"],
  providers: [DecimalPipe],
})


export class CompanyListComponent implements OnInit {
  constructor(private service: CompanyService,
    public activeModal: NgbActiveModal,
    public router:Router,
    public route:ActivatedRoute,
    private modalService: NgbModal, private pipe: DecimalPipe) {

  }
  public companies: Company[] = [];
  public companies$ = new BehaviorSubject<Company[]>([]);
  private _loading$ = new BehaviorSubject<boolean>(true);
  private _search$ = new Subject<void>();
  private _State: State;
  public modalRef: any;
  public formData: Company;
  public state;
  private _totalCompanies$ = new BehaviorSubject<number>(0);
  breadCrumbItems: Breadcrumb[];
  @ViewChildren(LoadsSortableDirective)
  headers: QueryList<LoadsSortableDirective>;
  @ViewChild('editModal') editModal: ElementRef;

  ngOnInit(): void {
    this.state = State
    this._State = {
      page: 1,
      pageSize: 10,
      searchTerm: " ",
      sortColumn: "",
      sortDirection: "",
      startIndex: 0,
      endIndex: 9,
      totalRecords: 0,
    };

    this._search$
      .pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(100),
        switchMap(() => this._search()),
        delay(100),
        tap(() => this._loading$.next(false))
      )
      .subscribe((result) => {
        this.companies$.next(result.companies);
        this._totalCompanies$.next(result.total);
      });

    this.initTable();

  }

  getStateName(countryCode: String, stateCode: String) {
    return this.state.getStateByCodeAndCountry(countryCode, stateCode)
      ;
  }

  validSubmit($event) {

    console.log($event);
    // this.submit = true;
    // console.log(this.form.telephone.value.length);
  }


  get startIndex() {
    return this._State.startIndex;
  }
  get total$() {
    return this._totalCompanies$.asObservable();
  }
  get endIndex() {
    return this._State.endIndex;
  }
  get totalRecords() {
    return this._State.totalRecords;
  }
  get page() {
    return this._State.page;
  }
  get pageSize() {
    return this._State.pageSize;
  }
  get searchTerm() {
    return this._State.searchTerm;
  }
  set page(page: number) {
    this._set({ page });

  }

  initTable() {
    this.service.getAll().subscribe(data => {
      data.forEach(company => {
        this.companies.push(company);
        this._search$.next();
      })
    })

  }

  // tslint:disable-next-line: adjacent-overload-signatures
  set pageSize(pageSize: number) {
    this._set({ pageSize });

  }
  set searchTerm(searchTerm: string) {
    this._set({ searchTerm });
    this._search$.next();
  }

  set sortColumn(sortColumn: string) {
    this._set({ sortColumn });

  }
  set sortDirection(sortDirection: SortDirection) {
    this._set({ sortDirection });

  }
  private _set(patch: Partial<State>) {
    Object.assign(this._State, patch);
    this._search$.next();

  }

  _search(): Observable<companySearchResult> {

    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._State;
    // 1. sort
    let companies = sort(this.companies, sortColumn, sortDirection);

    // 2. filter
    companies = companies.filter((table) => matches(table, searchTerm));
    //  this._processedLoads$.next(loads);
    const total = companies.length;
    // 3. paginate
    this._State.totalRecords = companies.length;
    this._State.startIndex = (page - 1) * this.pageSize + 1;
    this._State.endIndex = (page - 1) * this.pageSize + this.pageSize;

    if (this.endIndex > this.totalRecords) {
      this._State.endIndex = this.totalRecords;
    }

    companies = companies.slice(this._State.startIndex - 1, this._State.endIndex);

    return of({ companies, total });
  }

  onSort({ column, direction }: SortEvent) {

    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = "";
      }
    });

    this.sortColumn = column;
    this.sortDirection = direction;
  }

  onEdit($event) {

    const companyToEdit = this.companies.filter(company => company.id === $event);
    this.formData = companyToEdit[0];

    this.modalRef = this.modalService.open(this.editModal, {
      scrollable: true,
      size: "xl",
      centered: true,
    });
  }

  onViewFile($event) {
    this.router.navigate([ 'factoring-company/list/view', $event,'files' ], );
  }



}
