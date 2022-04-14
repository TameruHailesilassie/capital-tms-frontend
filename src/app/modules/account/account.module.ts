import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AccountRoutingModule } from "./account-routing.module";
import { AuthModule } from "./auth/auth.module";
import { AuthfakeauthenticationService } from "src/app/core/services/authfake.service";
import { RolebasedlandingService } from "src/app/core/services/rolebasedlanding.service";

@NgModule({
  declarations: [],
  imports: [CommonModule, AccountRoutingModule, AuthModule],
})
export class AccountModule {}
