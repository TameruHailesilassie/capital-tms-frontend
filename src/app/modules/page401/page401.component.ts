import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthfakeauthenticationService } from 'src/app/core/services/authfake.service';

@Component({
  selector: 'app-page401',
  templateUrl: './page401.component.html',
  styleUrls: ['./page401.component.scss']
})

/**
 * Pages-500 component
 */
export class Page401Component implements OnInit {

  constructor(private authService: AuthfakeauthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  navigateToDashboard() {

    switch (this.authService.currentUserValue.role) {

      case "super-admin":
        this.router.navigate(["/analytics/company"]);
        break;
      case "office-admin":
        this.router.navigate(["/analytics/office"]);
        break;
      case "dispatcher":
        this.router.navigate(["/analytics/personal"]);
        break;

    }
  }

}
