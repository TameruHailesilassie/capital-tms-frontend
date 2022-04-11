import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./core/guards/auth.guard";
import { LayoutComponent } from "./layouts/layout.component";

const routes: Routes = [
  {
    path: "account",
    loadChildren: () =>
      import("./account/account.module").then((m) => m.AccountModule),
  },
  // tslint:disable-next-line: max-line-length
  {
    path: "",
    component: LayoutComponent,
    loadChildren: () =>
      import("./modules/modules.module").then((m) => m.PagesModule),
    canActivate: [AuthGuard],
  },
 
  {
    path: "analytics",
    loadChildren: () =>
      import("./modules/analytics/analytics.module").then(
        (m) => m.AnalyticsModule
      ),
  },
  {
    path: "loads",
    loadChildren: () =>
      import("./modules/load/load.module").then((m) => m.LoadModule),
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "top",
      relativeLinkResolution: "legacy",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
