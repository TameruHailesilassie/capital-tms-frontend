import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Company } from "src/app/shared/models/Company.models";
import { environment } from "src/environments/environment";
@Injectable({
  providedIn: "root",
})
export class CompanyService {
  constructor(private http: HttpClient) {}

  baseUrl = environment.baseURL;
  //all companies

  getAll(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.baseUrl}/factoring-companies`);
  }

  get(id: any): Observable<Company> {
    return this.http.get<Company>(`${this.baseUrl}/factoring-company/${id}`);
  }
}
