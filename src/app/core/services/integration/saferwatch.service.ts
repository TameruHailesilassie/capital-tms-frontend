import { Injectable } from '@angular/core';
import { SaferWatchApiCredentials } from 'src/app/shared/models/saferCredentials';
import { environment } from 'src/environments/environment';
import { SaferWatchRequest } from 'src/app/shared/models/saferWatchRequest';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaferwatchService {

  private isAddonEnabled: boolean = false;
  private apiCredentials: SaferWatchApiCredentials


  constructor(
    private httpClient: HttpClient
  ) { }

  get addonEnabled() {
    return this.isAddonEnabled;
  }

  set addonEnabled(enabled: boolean) {
    this.isAddonEnabled = enabled;
  }



  checkAddon() {
    //call end point to check  
    console.log("checking saferwatch addon...");


    //set if addonEnabled
    this.isAddonEnabled = true;


    //set Api Credentials

    this.apiCredentials={
      customerKey:"9TC975cKJZ",
      serviceKey:"JgdTV75KpD"
    }


  }

  searchCarrier(request: SaferWatchRequest) {

    //overiding cors

    const httpOptions = {
 	 	headers: new HttpHeaders()
	}

    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');


    //make a request 

    if (this.isAddonEnabled && this.apiCredentials) {

      this.httpClient.get(environment.saferWatchBaseURL
        + `CarrierLookup&ServiceKey=${this.apiCredentials.serviceKey}
           &CustomerKey=${this.apiCredentials.customerKey}
           &number=${request.identifier}${request.parameter}`,httpOptions )
        .pipe(
          catchError(error => {
            console.log(error);
            return throwError(() => error);

          })

        ).subscribe(snapshot => {
          console.log(snapshot);

        })
    }
  }

}
