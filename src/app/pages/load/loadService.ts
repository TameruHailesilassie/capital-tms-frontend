import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { AuthfakeauthenticationService } from "src/app/core/services/authfake.service";
import { Loads } from "./data";
import { Load } from "./load.model";
export enum LOAD_TAB_TYPE {
  ACTIVE = "Active",
  DELIVERED = "Delivered",
  CANCELLED = "Cancelled",
}

@Injectable({
  providedIn: "root",
})

/**
 * HTTp client service to manage loads
 * CRUD and Filter data
 */
export class LoadService {
  private _loads$ = new BehaviorSubject<Load[]>([]);

  private _allLoads$ = new BehaviorSubject<Load[]>([]);
  private _myLoads$ = new BehaviorSubject<Load[]>([]);

  constructor(private authService: AuthfakeauthenticationService) {
    this.fetchLoads();
  }

  get loads$() {
    return this._loads$.asObservable();
  }

  fetchLoads() {
    /**
     * http client fetch loads form API based on loged in user role
     */
    this._allLoads$.next(Loads);
    this._loads$.next(Loads);
    this.filterOnlyMyloads();
  }

  showMyLoads() {
    this._loads$.next(this._myLoads$.value);
  }
  showAllLoads() {
    this._loads$.next(this._allLoads$.value);
  }
  filterOnlyMyloads() {
    this._myLoads$.next(
      this._allLoads$.value.filter((load) => {
        return load.dispatcher == this.authService.currentUserValue.id;
      })
    );
  }
}
