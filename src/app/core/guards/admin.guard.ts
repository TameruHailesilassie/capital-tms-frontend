import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { AuthfakeauthenticationService } from "../services/authfake.service";

@Injectable({ providedIn: "root" })
export class AdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private authFackservice: AuthfakeauthenticationService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authFackservice.currentUserValue;
    if (currentUser) {
      // logged in so return true
      if (currentUser.role === "super-admin" || currentUser.role === "office-admin" ) {
        return true;
      } else {
        this.router.navigate(["/unauthorized"],
          {
            queryParams: { returnUrl: state.url },
          }
        );
      }
    } else {
      //not logged in
      return false;
    }
  }
}
