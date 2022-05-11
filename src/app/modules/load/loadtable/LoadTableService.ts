import { PipeTransform } from "@angular/core";
import { DecimalPipe } from "@angular/common";
import { BehaviorSubject, Observable, of, Subject } from "rxjs";
import { debounceTime, delay, switchMap, tap } from "rxjs/operators";
import { FilteredResult, Load, SearchResult } from "../load.model";
import { SortDirection } from "src/app/shared/directives/loads-sortable.directive";
import { AuthfakeauthenticationService } from "src/app/core/services/authfake.service";
import { LoadService, LOAD_TAB_TYPE } from "../../../core/services/loadService";

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

/**
 * Sort the table data
 * @param tabless Table field value
 * @param column Fetch the column
 * @param direction Sort direction Ascending or Descending
 */

function sort(tables: Load[], column: string, direction: string): Load[] {
  if (direction === "" || column === "") {
    return tables;
  } else {
    return [...tables].sort((a, b) => {
      const res = compare(`${a[column]}`, `${b[column]}`);
      return direction === "asc" ? res : -res;
    });
  }
}

/**
 * Table Data Match with Search input
 * @param tables Table field value fetch
 * @param term Search the value
 */
function matches(tables: Load, term: string, pipe: PipeTransform) {
  return (
    pipe.transform(tables.status).includes(term) ||
    tables.loadNumber.toLowerCase().includes(term) ||
    tables.poNumber.toLowerCase().includes(term) ||
    tables.customer.name.toLowerCase().includes(term) ||
    tables.carrier.name.toLowerCase().includes(term) ||
    tables.origin.name.toLowerCase().includes(term) ||
    tables.pickupDate.toLowerCase().includes(term) ||
    tables.destination.name.toLowerCase().includes(term) ||
    tables.delDate.toLowerCase().includes(term)
  );
}

export class LoadTableService {
  public loads = new BehaviorSubject<Load[]>([]);
  // tslint:disable-next-line: variable-name
  private _loading$ = new BehaviorSubject<boolean>(true);
  // tslint:disable-next-line: variable-name
  private _search$ = new Subject<void>();
  private _filter$ = new Subject<void>();
  private _adjust$ = new Subject<void>();
  // tslint:disable-next-line: variable-name
  private _loads$ = new BehaviorSubject<Load[]>([]);
  private _processedLoads$ = new BehaviorSubject<Load[]>([]);
  // tslint:disable-next-line: variable-name
  private _totalLoads$ = new BehaviorSubject<number>(0);
  private office: string;
  private status: number;
  private pickupDate: string;
  private _State: Partial<State>;

  constructor(

    private pipe: DecimalPipe,
    private authService: AuthfakeauthenticationService,
    private _loadService: LoadService
  ) {

    this._State = {
      page: 1,
      pageSize: 10,
      searchTerm: "",
      sortColumn: "",
      sortDirection: "",
      totalRecords: 0,
      startIndex: 0,
      endIndex: 9,
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

        this._loads$.next(result.loads);
        this._totalLoads$.next(result.total);
      });

  // this._search$.next();

    this._filter$
      .pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(100),
        switchMap(() => this._filter()),
        delay(100),
        tap(() => this._loading$.next(false))
      )
      .subscribe((result) => {

        this._loads$.next(result.loads);
        this._totalLoads$.next(result.total);
      });

    this._adjust$
      .pipe(
        tap(() => this._loading$.next(true)),
        debounceTime(100),
        switchMap(() => this._adjustTable()),
        delay(100),
        tap(() => this._loading$.next(false))
      )
      .subscribe((result) => {
        this._loads$.next(result.loadsFiltered);
        this._totalLoads$.next(result.total);
      });

  }

  set initForLoadType(type: LOAD_TAB_TYPE) {

    this._loadService.loads$.subscribe((data) => {

      let filteredData: Load[];

      switch (type) {
        case LOAD_TAB_TYPE.ACTIVE:
          filteredData = data.filter((load) => {
            if (load.status !== 8 && load.status !== 6) return true;
          });
          break;
        case LOAD_TAB_TYPE.DELIVERED:
          filteredData = data.filter((load) => load.status === 8);
          break;
        case LOAD_TAB_TYPE.CANCELLED:
          filteredData = data.filter((load) => load.status === 6);
          break;
      }

      this.loads.next(filteredData);
      // this._processedLoads$.next(filteredData);

      //this._filter$.next();
      this._search$.next();
    });
  }

  get loads$() {
    return this._loads$.asObservable();
  }

  get total$() {
    return this._totalLoads$.asObservable();
  }

  get loading$() {
    return this._loading$.asObservable();
  }

  get searchTerm() {
    return this._State.searchTerm;
  }
  get startIndex() {
    return this._State.startIndex;
  }
  get endIndex() {
    return this._State.endIndex;
  }
  get totalRecords() {
    return this._State.totalRecords;
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

  set officeFilterTerm(term: string) {
    this.office = term;
  }

  set statusFilterTerm(term: number) {
    this.status = term;
  }
  set pickUpFilterTerm(term: string) {
    this.pickupDate = term;
  }

  set page(page: number) {
    this._set({ page });
    this._adjust$.next();
  }
  // tslint:disable-next-line: adjacent-overload-signatures
  set pageSize(pageSize: number) {
    this._set({ pageSize });
    this._adjust$.next();
  }


  private _set(patch: Partial<State>) {
    Object.assign(this._State, patch);

  }

  private _adjustTable(): Observable<FilteredResult> {

    const { sortColumn, sortDirection, pageSize, page, searchTerm } =
      this._State;

    let loadsFiltered = this._processedLoads$.value;
    loadsFiltered = sort(loadsFiltered, sortColumn, sortDirection);
    const total = loadsFiltered.length;
    // 3. paginate
    this._State.totalRecords = loadsFiltered.length;
    this._State.startIndex = (page - 1) * this.pageSize + 1;
    this._State.endIndex = (page - 1) * this.pageSize + this.pageSize;
    if (this.endIndex > this.totalRecords) {
      this._State.endIndex = this.totalRecords;
    }
    loadsFiltered = loadsFiltered.slice(
      this._State.startIndex - 1,
      this._State.endIndex
    );

    return of({ loadsFiltered, total });
  }

  private _search(): Observable<SearchResult> {
    console.log(this._State);
    

    const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._State;
    let loadsToSearch: Load[];

    if (this._processedLoads$.value.length === 0)
      this._processedLoads$.next(this.loads.value);

    loadsToSearch = this._processedLoads$.value;

    // 1. sort
    let loads = sort(loadsToSearch, sortColumn, sortDirection);

    // 2. filter
    loads = loads.filter((table) => matches(table, searchTerm, this.pipe));

    //  this._processedLoads$.next(loads);
    const total = loads.length;
    // 3. paginate
    this._State.totalRecords = loads.length;
   
    console.log(this._State.startIndex);
    this._State.startIndex = (page - 1) * this.pageSize + 1;
    
    this._State.endIndex = (page - 1) * this.pageSize + this.pageSize;
    if (this.endIndex > this.totalRecords) {
      this._State.endIndex = this.totalRecords;
    }


    loads = loads.slice(this._State.startIndex - 1, this._State.endIndex);




    return of({ loads, total });
  }

  _filter(): Observable<SearchResult> {

    const filterByOffice = (load: Load) => {
      if (this.office !== null) return load.office.match(this.office);
      else return true;
    };

    const filterByStatus = (load: Load) => {
      if (this.status !== null) return load.status == this.status;
      else return true;
    };

    const filterByPickUpDate = (load: Load) => {
      if (this.pickupDate !== null) return load.pickupDate === this.pickupDate;
      else return true;
    };

    const { sortColumn, sortDirection, pageSize, page, searchTerm } =
      this._State;
    // 1. sort
    let loads = sort(this.loads.value, sortColumn, sortDirection);
    // 2. filter
    loads = loads
      .filter(filterByOffice)
      .filter(filterByStatus)
      .filter(filterByPickUpDate);

    this._processedLoads$.next(loads);
    const total = loads.length;
    // 3. paginate
    this._State.totalRecords = loads.length;
    this._State.startIndex = (page - 1) * this.pageSize + 1;
    this._State.endIndex = (page - 1) * this.pageSize + this.pageSize;
    if (this.endIndex > this.totalRecords) {
      this._State.endIndex = this.totalRecords;
    }
    loads = loads.slice(this._State.startIndex - 1, this._State.endIndex);

    return of({ loads, total });
  }

  filterTable(office?: string, status?: number, pickupDate?: string) {
    this.officeFilterTerm = office;
    this.statusFilterTerm = status;
    this.pickUpFilterTerm = pickupDate;
    this._filter$.next();
  }
}
