import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/models/auth.models';

@Injectable({
  providedIn: 'root'
})
export class RolebasedlandingService {

  constructor(private route: ActivatedRoute,
    private router: Router,) { }



  routeToLanding(user: User) {

    switch (user.role) {

      case "super-admin":
        this.router.navigate(["/analytics"])
        break;
      case "office-admin":
        this.router.navigate(["/analytics"])
        break;
        case "dispatcher":
          this.router.navigate(["/analytics/personal"])
          break;
  

    }

  }
}
