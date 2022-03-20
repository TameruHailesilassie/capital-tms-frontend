import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/auth.models';

@Injectable({
  providedIn: 'root'
})
export class RolebasedlandingService {

  constructor(private route: ActivatedRoute,
    private router: Router,) { }



  routeToLanding(user: User) {

    switch (user.role) {

      case "super-admin":
        this.router.navigate(["/analytics/company"])
        break;
      case "office-admin":
        this.router.navigate(["/analytics/office"])
        break;


    }

  }
}
