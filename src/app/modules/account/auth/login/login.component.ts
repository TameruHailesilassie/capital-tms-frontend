import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { RolebasedlandingService } from "../../../../core/services/rolebasedlanding.service";
import { User } from "../../../../shared/models/auth.models";
import { AuthfakeauthenticationService } from "../../../../core/services/authfake.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  error = "";
  visiblePassword = false;
  // set the currenr year
  year: number = new Date().getFullYear();
  constructor(
    private formBuilder: FormBuilder,
    private authFackservice: AuthfakeauthenticationService,
    private roleBasedRouting: RolebasedlandingService
  ) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    } else {
      this.authFackservice
        .login(this.f.email.value, this.f.password.value)
        .pipe(first())
        .subscribe(
          (data) => {
            let user: User = JSON.parse(JSON.stringify(data));
            this.roleBasedRouting.routeToLanding(user);
          },
          (error) => {
            this.error = error ? error : "";
          }
        );
    }
  }

  /** toggle password visibility */
  togglePasswordField() {
    this.visiblePassword = !this.visiblePassword;
  }
}
